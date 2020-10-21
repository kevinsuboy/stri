# == Schema Information
#
# Table name: activities
#
#  id          :bigint           not null, primary key
#  date        :date             not null
#  description :string
#  distance    :float            not null
#  duration    :time             not null
#  sport       :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  route_id    :integer
#  user_id     :integer          not null
#
# Indexes
#
#  index_activities_on_route_id  (route_id)
#  index_activities_on_user_id   (user_id)
#
require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
