json.partial! "api/users/user", user: @user
json.latest do 
    json.extract! @latest, :title, :sport, :date
end
json.set! :rmb, @rmb
