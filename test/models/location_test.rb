# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  lat        :decimal(, )      not null
#  lng        :decimal(, )      not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  route_id   :integer          not null
#
# Indexes
#
#  index_locations_on_route_id  (route_id)
#
require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
