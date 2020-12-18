class SeedData
    attr_reader :activity_titles, :activity_descriptions, :route_titles, :route_descriptions, :locations
    def initialize()
        @activity_titles = [
            "Do the Ladies Run This?",
            "Doing it Way Big",
            "Cold Steel",
            "World War III",
            "Tasmanian Pain Coaster",
            "Big Shots",
            "Power",
            "Addicted to Danger",
            "Peel their Caps Back",
            "No Nuts No Glory",
            "Mind of a Lunatic",
            "Now I Feel Ya",
            "Forces of Nature",
            "I Seen a Man Die",
            "War Games",
            "Alive on Arrival",
            "Bleeding Hearts Club",
            "Rock City",
            "Show & Improve",
            "Circuit City",
            "Royal Flush",
            "Dirt off my Shoulders",
            "ExtraHard",
            "Suzie Q Sailaway",
            #! 
            "50 Shades of Awesome",
            "Agony of De Feet",
            "Are We There Yet?",
            "Baby Got Track",
            "Between a Walk and a Hard Pace",
            "Big Test Icicles",
            "Blister Sisters",
            "Blondes Have More Run",
            "Bodyglide, Blisters and Bengay",
            "Bringing Up the Rear",
            "Buns on the Run",
            "Chafing the Dream",
            "Chicks with Kick",
            "Cough, Hack, Wheeze",
            "Crouching Runner, Hidden Van",
            "CU @ My Pace",
            "Cunning Stunts",
            "Dangerous Curves",
            "Dashing Divas",
            "Don't Be a Smart Pass",
            "Dudes and Boobs",
            "Easier Said than Run",
            "Forty 'n Fit",
            "Get 'er Run",
            "Get Fit or Die Tryin'",
            "Got the runs",
            "Gym Class Heroes",
            "H.A.R.T. - Haulin' Ass Race Time",
            "Happy Feet",
            "Heart & Sole",
            "Hell on Heels",
            "I Thought This Was a 5k?",
            "I-B-Pro-Fun",
            "Jugs and THugs",
            "Jugs-a-Joggin",
            "Ladies from the 80's",
            "Luck B 4 Ladies",
            "Madams of Mayhem",
            "Miles to Martinis",
            "Mind over Miles",
            "My So Called Legs",
            "Naptime at the Finish Line",
            "Nerd Herd",
            "Not Fast, Just Furious",
            "Not The First Rodeo",
            "Off Like a Prom Dress",
            "Pain Killers",
            "Peanut Butter & Jelly Legs",
            "PokeyMoms",
            "Rapid Thigh Movement",
            "Road Runners",
            "Role Models",
            "Run Like the Winded",
            "Run Long and Perspire",
            "Runderpants",
            "Running on Empty",
            "Smells Like Team Spirit",
            "Sole Mates",
            "Sole Train",
            "Spark Plugs",
            "Straight Off the Couch",
            "Stunner Runners",
            "Superfeet",
            "Sweet Soles",
            "Team Spanks",
            "Speed Bumps",
            "Tenacious Turtles",
            "The Fit, The Fat & The Elderly",
            "The Road to Glory",
            "The Tightie-Whities",
            "The Trots",
            "Thong Distance Runners",
            "Tight Butts and Sweaty Nuts",
            "Training B.R.A's",
            "Training Wheels",
            "Twin Peaks",
            "Twisted Blisters",
            "Victorious Secret",
            "Village Idiots",
            "Wii Not Fit",
            "Wolf Pack",
            "Wonder Women",
            "Where's The Finish?",
            "Young Tarts and Old Farts",
            "Your Pace or Mine?",
            "Yummy Mummies",
            "Cleats & Cleavage",
            "Hit for Brains",
            "One Hit Wonders",
            "Scared hitless",
            "Sons of Pitches",
            "Goal Diggers",
            "Cleats & Cleavage",
            "Smokin' Tees and Strokin' 3s",
            "Bad Brother Muckers",
            "Dirt Digglers",
            "Dirty Old Men",
            "Mudder Fockers",
            "Mud Lite",
        ]
        @route_titles = [
            "Incredibly Difficult Trail Through the Mountains",
            "My Favorite San Francisco Bike Trail",
            "The search for El Dorado",
            "Up and Downs like there's no tomorrow!",
            "New York Jog",
            "Tour of Chicago for Deep Dish",
            "Raging River Run",
            "Your legs are gonna be sore in the morning",
            "Searching for Blackbeard's Gold",
            "This is one heck of a workout",
            "Miami beach run",
            "Laps around Hawaii",
            "Around the world in 80 days",
            "Shortcup to the peak of Mt. Everest",
            "Secret trip through Yosemite",
            "Hike across America",
            "Moonshiners run",
            "The Pony Express",
            "Bandit's Valley Run",
            "Border Crossings",
            "Do this when you're tired",
            "Maple syrup run",
            "Forested trail",
            "Careful of the rattlesnakes",
            "Explore this cute town",
            "Diamond run",
            "Darjeeling Express",
            "Army Rangers' Bootcamp",
            "Break a leg",
            "Usain's Workout"
        ]
        @locations = [
            { lat: 33.6861,             lng: -117.8263}, # civic center
            { lat: 33.7002,             lng: -117.7797}, # heritage park
            { lat: 33.69516851340369, lng: -117.82704364411289}, # in n out
            { lat: 33.69034700566907, lng: -117.83429280742595}, # h mart
            { lat: 33.67751559571133, lng: -117.77093887373425}, # oak creek golf
            { lat: 33.68586306152393, lng: -117.81075232358319}, # CAVA
            { lat: 33.69927507716049, lng: -117.85183447814283}, # edwards
            { lat: 33.71716415547745, lng: -117.83311444975271}, # brewery
            { lat: 33.70507189673677, lng: -117.76990997129374}, # northwood elementary
            { lat: 33.66903263016905, lng: -117.78544633966075}, # i can bbq
            { lat: 33.66215206587432, lng: -117.7734921124155}, # hoag
            { lat: 33.65879226698482, lng: -117.76751512891569}, # blizzard
            { lat: 33.644069003917664, lng: -117.85164883107187}, # biomed research
            { lat: 33.65208124049632, lng: -117.82322631364755}, # uni high
            { lat: 33.649784761799005, lng: -117.79558312873044}, # strawberry farm
            { lat: 33.63444740884629, lng: -117.79839419987695}, # u4 engr
            { lat: 33.63080023973889, lng: -117.79692658588895}, # shady canyon
            { lat: 33.63193004150569, lng: -117.83268658207287}, # mariners
            { lat: 33.63556911110392, lng: -117.84892174033601}, # herb & ranch
            { lat: 33.68476557294803, lng: -117.81330907867729}, # pho
            { lat: 33.6722825216383, lng: -117.78887814998278}, # omomo
            { lat: 33.69095445549453, lng: -117.79300074434126}, # deerfield
            { lat: 33.68112706640725, lng: -117.79484707516221}, # north lake
            { lat: 33.672819017544754, lng: -117.79227972387498}, # checkered flag
            { lat: 33.69078596237893, lng: -117.76983581613473}, # 99 ranch
            { lat: 33.706974855822935, lng: -117.78382067738562}, # hokkaido
            { lat: 33.68892550592332, lng: -117.82262831461489}, # bill barber
            { lat: 33.68128525023553, lng: -117.82073349049891}, # san marino park
            { lat: 33.68997655675896, lng: -117.81344582129388}, # santa clara
            { lat: 33.690064866618044, lng: -117.80765009795103}, # plaza park
            { lat: 33.62051817447139, lng: -117.86945094589147}, # big canyon
            { lat: 33.61101269292626, lng: -117.88112071769568}, # newport beach cc
            { lat: 33.6115667609989, lng: -117.8645890753952}, # fresh bro's pizza
            { lat: 33.609136130662, lng: -117.8554278531112}, # pacific view
            { lat: 33.605171834455525, lng: -117.84667477466034}, # harbor watch
            { lat: 33.566895222889485, lng: -117.82136136907253}, # el moro
            { lat: 33.56478415697583, lng: -117.82550442446573}, # moro campground
            { lat: 33.56105847765703, lng: -117.81435653272771}, # moro ridge
            { lat: 33.547631539648826, lng: -117.80395406034845}, # crescent bay
            { lat: 33.546012905545325, lng: -117.7981430684653}, # shaws
            { lat: 33.5437118531071, lng: -117.78848630873252}, # las brisas
            { lat: 33.543339498180416, lng: -117.75309478740587}, # top of the world

        ]
    end

end