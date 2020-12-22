
export default (sport) => {
    const bank = {
        "Ride":                google.maps.TravelMode.BICYCLING ,
        "Run":                 google.maps.TravelMode.WALKING ,
        "Swim":                google.maps.TravelMode.WALKING ,
        "Hike":                google.maps.TravelMode.WALKING ,
        "Walk":                google.maps.TravelMode.WALKING ,
        "Alpine_Ski":          google.maps.TravelMode.BICYCLING         ,
        "Backcountry Ski":     google.maps.TravelMode.BICYCLING             ,
        "Canoe":               google.maps.TravelMode.BICYCLING     ,
        "Crossfit":            google.maps.TravelMode.BICYCLING     ,
        "E-Bike Ride":         google.maps.TravelMode.BICYCLING         ,
        "Elliptical":          google.maps.TravelMode.BICYCLING         ,
        "Handcycle":           google.maps.TravelMode.BICYCLING         ,
        "Ice Skate":           google.maps.TravelMode.BICYCLING         ,
        "Inline Skate":        google.maps.TravelMode.BICYCLING         ,
        "Kayaking":            google.maps.TravelMode.BICYCLING     ,
        "Kitesurf":            google.maps.TravelMode.BICYCLING     ,
        "Nordic Ski":          google.maps.TravelMode.BICYCLING         ,
        "Rock Climb":          google.maps.TravelMode.WALKING         ,
        "Roller Ski":          google.maps.TravelMode.WALKING         ,
        "Rowing":              google.maps.TravelMode.WALKING     ,
        "Snowboard":           google.maps.TravelMode.BICYCLING         ,
        "Snowshoe":            google.maps.TravelMode.WALKING     ,
        "Stair-Stepper":       google.maps.TravelMode.WALKING             ,
        "Stand Up Paddling":   google.maps.TravelMode.BICYCLING                 ,
        "Surfing":             google.maps.TravelMode.BICYCLING     ,
        "Velomobile":          google.maps.TravelMode.DRIVING         ,
        "Virtual Ride":        google.maps.TravelMode.BICYCLING         ,
        "Virtual Run":         google.maps.TravelMode.WALKING         ,
        "Weight Training":     google.maps.TravelMode.WALKING             ,
        "Wheelchair":          google.maps.TravelMode.WALKING         ,
        "Windsurf":            google.maps.TravelMode.WALKING     ,
        "Workout":             google.maps.TravelMode.WALKING     ,
        "Yoga":                google.maps.TravelMode.WALKING ,
        "Other":               google.maps.TravelMode.WALKING     ,
        "":                    google.maps.TravelMode.WALKING
    }
    return (
        bank[sport]
    )
}