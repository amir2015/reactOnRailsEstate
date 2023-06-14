# == Schema Information
#
# Table name: agents
#
#  id         :bigint           not null, primary key
#  first_name :string
#  last_name  :string
#  phone      :string
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Agent < ApplicationRecord
has_many :properties
has_many :buyers

  def self.unsold_homes
    select('agents.id,first_name,last_name,email,sold ,COUNT (*)  as frequency')
    .joins('inner join properties as p On p.agent_id =agents.id')
    .where('sold <>true')
    .group('sold,agents.id')
    .order('frequency DESC')
  end
end
