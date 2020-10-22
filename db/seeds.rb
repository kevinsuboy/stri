# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Route.delete_all
Activity.delete_all
sports = ["Ride","Run","Swim","Hike","Walk","Alpine_Ski",
                                        "Backcountry Ski","Canoe","Crossfit","E-Bike Ride","Elliptical",
                                        "Handcycle","Ice Skate","Inline Skate","Kayaking","Kitesurf",
                                        "Nordic Ski","Rock Climb","Roller Ski","Rowing","Snowboard",
                                        "Snowshoe","Stair-Stepper","Stand Up Paddling","Surfing","Velomobile",
                                        "Virtual Ride","Virtual Run","Weight Training","Wheelchair","Windsurf",
                                        "Workout","Yoga","Other"
                                        ]
routes = []

u1 = User.create!(
    username: "Usain Bolt",
    email: "irunfast@goldmedal.com",
    password: "iamusain"
)
20.times do 
    routes.push(
        Route.create!(
            name: Faker::Restaurant.name,
            description: Faker::Restaurant.description,
            distance: rand*1000,
            user_id: u1.id
        )
    )
end
100.times do
    Activity.create!(
        sport: sports.sample,
        title: Faker::Food.dish,
        description: Faker::Food.description,
        distance: rand*1000,
        date: Faker::Date.between(from: 120.days.ago, to: Date.today),
        duration: "#{rand(23)}:#{rand(59)}:#{rand(59)}",
        user_id: u1.id,
        route_id: routes.sample.id
    )
end