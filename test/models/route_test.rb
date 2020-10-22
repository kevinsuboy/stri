# == Schema Information
#
# Table name: routes
#
#  id                 :bigint           not null, primary key
#  description        :string           not null
#  distance           :integer          not null
#  estimated_duration :time             not null
#  name               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  user_id            :integer          not null
#
# Indexes
#
#  index_routes_on_name     (name)
#  index_routes_on_user_id  (user_id)
#
require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
