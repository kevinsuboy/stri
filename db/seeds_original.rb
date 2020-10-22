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
r1_1 = Route.create!(
    name: 'Morning Jog 1',
    description: 'Very easy',
    distance: 100.06,
    user_id: u1.id
)
r1_2 = Route.create!(
    name: 'Morning Jog 2',
    description: 'Very hard',
    distance: 201.00,
    user_id: u1.id
)
r1_3 = Route.create!(
    name: 'Morning Jog 3',
    description: 'Very medium',
    distance: 300.30,
    user_id: u1.id
)
r1_4 = Route.create!(
    name: 'Morning Jog 3',
    description: 'Very very very easy',
    distance: 400.00,
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
    description: "finished it 1 minutes faster",
    distance: 120.00,
    date: Date.new(2010,9,7),
    duration: "00:56:01",
    user_id: u2.id,
    route_id: r1.id
)
a1_1 = Activity.create!(
    sport: 'Hike',
    title: 'Semptember 8 Jog in my fancy new pikachu pajamas with a blueberry muffin and 20 cups of coffee',
    description: "finished it 10 minutes faster",
    distance: 120.00,
    date: Date.new(2000,9,8),
    duration: "00:56:01",
    user_id: u1.id,
    route_id: r1_3.id
)
a1_2 = Activity.create!(
    sport: 'Ride',
    title: 'Semptember 9 Jog',
    description: "finished it 20 minutes faster",
    distance: 2.22,
    date: Date.new(2020,9,9),
    duration: "20:00:01",
    user_id: u1.id,
)
a1_3 = Activity.create!(
    sport: 'Ice Skate',
    title: 'March 19 Bloop',
    description: "I am awesome",
    distance: 32.33,
    date: Date.new(2009,3,19),
    duration: "2:33:01",
    user_id: u1.id,
)
a1_4 = Activity.create!(
    sport: 'Surfing',
    title: 'May 14 Jog',
    description: "I am groot",
    distance: 44.444,
    date: Date.new(2013,5,14),
    duration: "5:46:01",
    user_id: u1.id,
)
a2 = Activity.create!(
    sport: 'Run',
    title: 'October 31 Bike',
    description: "finished it 10 minutes slower",
    distance: 420.00,
    date: Date.new(2020,10,31),
    duration: "10:34:01",
    user_id: u1.id,
    route_id: u2.id
)
a1_3 = Activity.create!(
    sport: 'Rock Climb',
    title: 'Semptember 10 Jog',
    distance: 3.33,
    date: Date.new(2000,9,10),
    duration: "10:08:01",
    user_id: u1.id,
    route_id: r2.id
)

