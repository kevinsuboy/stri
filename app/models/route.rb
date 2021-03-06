# == Schema Information
#
# Table name: routes
#
#  id                 :bigint           not null, primary key
#  description        :string           not null
#  distance           :float            not null
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
class Route < ApplicationRecord
    validates :name, :description, :distance, presence: true
    has_many :activity
    has_many :locations, dependent: :delete_all
    belongs_to :user
end
