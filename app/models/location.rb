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
class Location < ApplicationRecord
    validates :lat, :lng, :route_id, presence: true
    validates :order, uniqueness: { scope: :route_id }

    belongs_to :route
end
