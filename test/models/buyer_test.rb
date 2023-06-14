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
require "test_helper"

class BuyerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
