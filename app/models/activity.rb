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
class Activity < ApplicationRecord
    validates :user_id, :date, :distance, :duration,:sport,:title, presence: true
    validates :sport, inclusion: {in: ["Ride","Run","Swim","Hike","Walk","Alpine_Ski",
                                        "Backcountry Ski","Canoe","Crossfit","E-Bike Ride","Elliptical",
                                        "Handcycle","Ice Skate","Inline Skate","Kayaking","Kitesurf",
                                        "Nordic Ski","Rock Climb","Roller Ski","Rowing","Snowboard",
                                        "Snowshoe","Stair-Stepper","Stand Up Paddling","Surfing","Velomobile",
                                        "Virtual Ride","Virtual Run","Weight Training","Wheelchair","Windsurf",
                                        "Workout","Yoga","Other"
                                        ]}
    # belongs_to :route
    belongs_to :user
end
