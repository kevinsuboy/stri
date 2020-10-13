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

u1 = User.create!(
    username: "Usain Bolt",
    email: "irunfast@goldmedal.com",
    password: "iamusain"
)
u2 = User.create!(
    username: "Michael Phelps",
    email: "iluvweed@swimslikedolphin.com",
    password: "iamphelps"
)
r1 = Route.create!(
    name: 'Morning Jog',
    description: 'Very easy',
    distance: 100.00,
    user_id: u1.id
)
r2 = Route.create!(
    name: 'Afternoon Bike',
    description: 'Very hard',
    distance: 200.00,
    user_id: u2.id
)
a1 = Activity.create!(
    sport: 'Run',
    title: 'Semptember 7 Jog',
    description: "finished it 10 minutes faster",
    distance: 120.00,
    date: Date.new(2000,9,07),
    duration: "00:56",
    user_id: u2.id,
    route_id: r1.id
)
a2 = Activity.create!(
    sport: 'Run',
    title: 'October 31 Bike',
    description: "finished it 10 minutes slower",
    distance: 420.00,
    date: Date.new(2020,10,31),
    duration: "10:34",
    user_id: u1.id,
    route_id: u2.id
)

