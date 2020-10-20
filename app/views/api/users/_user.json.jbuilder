json.extract! user, :id, :username, :email
json.routes user.routes.order("created_at").pluck(:id)
json.activities user.activities.order("created_at").reverse.pluck(:id)
# debugger
if user.activities.length > 0
    json.latest user.activities.order("created_at").last, :title, :date, :duration, :sport
else
    json.latest nil
end
