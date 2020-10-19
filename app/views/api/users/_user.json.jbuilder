json.extract! user, :id, :username, :email
json.routes user.routes.pluck(:id)
json.activities user.activities.pluck(:id)
json.latest user.activities.order("created_at").last, :title, :date, :duration, :sport
