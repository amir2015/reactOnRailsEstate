# == Schema Information
#
# Table name: addresses
#
#  id          :bigint           not null, primary key
#  street      :string
#  city        :string
#  zip         :string
#  property_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Address < ApplicationRecord
  belongs_to :property
  def self.cities
    cities = select(" DISTINCT city ")
    cities.map do |city|
      city.city
    end
  end
end
