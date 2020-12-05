json.extract! route, :id, :description, :distance, :estimated_duration, :name, :user_id, :created_at
json.activities route.activity.order("date").reverse.pluck(:id)
