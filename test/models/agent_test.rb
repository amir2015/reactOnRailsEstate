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
require "test_helper"

class AgentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
