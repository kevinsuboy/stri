json.extract! user, :id, :username, :email
json.routes user.routes.pluck(:id)
json.activities user.activities.pluck(:id)
