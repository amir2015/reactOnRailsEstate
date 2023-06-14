# == Schema Information
#
# Table name: properties
#
#  id         :bigint           not null, primary key
#  price      :float
#  sold       :boolean
#  sold_price :float
#  beds       :integer
#  baths      :integer
#  sq_ft      :integer
#  agent_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class PropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
