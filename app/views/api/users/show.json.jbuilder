json.partial! "api/users/user", user: @user
json.latest do 
    # debugger
    json.extract! @latest, :title, :sport, :date
end
json.set! :rmb, @rmb
