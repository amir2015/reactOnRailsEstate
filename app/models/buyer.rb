# == Schema Information
#
# Table name: buyers
#
#  id         :bigint           not null, primary key
#  first_name :string
#  last_name  :string
#  phone      :string
#  email      :string
#  max_price  :float
#  cities     :text
#  agent_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Buyer < ApplicationRecord
  belongs_to :agent
  serialize :cities, Array


  def self.my_homes(id,cities)
    select('p.id, sq_ft, city, price')
    .joins("INNER JOIN agents AS a ON a.id = buyers.agent_id
     INNER JOIN properties AS p ON p.agent_id = buyers.agent_id AND p.price < buyers.max_price
     INNER JOIN addresses AS ad ON ad.property_id = p.id  AND ad.city = ANY ('{#{cities.join(',')}}')")
   .where("buyers.id = ? AND p.sold <> TRUE", id)
  end

  def my_homes
  {id:self.id, cities:self.cities, method_type:'instance'}
end

end
