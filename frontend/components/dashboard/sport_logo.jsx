import React from 'react';

export default (props) => {
    const bank = {
        "Ride":                 <i className="fas fa-biking"></i>,
        "Run":              <i className="fas fa-running"></i>,
        "Swim":                 <i className="fas fa-swimmer"></i>,
        "Hike":                 <i className="fas fa-hiking"></i>,
        "Walk":                 <i className="fas fa-walking"></i>,
        "Alpine_Ski":               <i className="fas fa-skiing"></i>,
        "Backcountry Ski":              <i className="fas fa-skiing-nordic"></i>,
        "Canoe":                <i className="fas fa-ship"></i>,
        "Crossfit":                 <i className="fas fa-dumbbell"></i>,
        "E-Bike Ride":              <i className="fas fa-biking"></i>,
        "Elliptical":               <i className="fas fa-biking"></i>,
        "Handcycle":                <i className="fas fa-biking"></i>,
        "Ice Skate":                <i className="fas fa-skating"></i>,
        "Inline Skate":                 <i className="fas fa-skating"></i>,
        "Kayaking":                 <i className="fas fa-ship"></i>,
        "Kitesurf":                 <i className="fas fa-water"></i>,
        "Nordic Ski":               <i className="fas fa-skiing-nordic"></i>,
        "Rock Climb":               <i className="fas fa-mountain"></i>,
        "Roller Ski":               <i className="fas fa-skiing"></i>,
        "Rowing":               <i className="fas fa-ship"></i>,
        "Snowboard":                <i className="fas fa-snowboarding"></i>,
        "Snowshoe":                 <i className="fas fa-snowflake"></i>,
        "Stair-Stepper":                <i className="fas fa-shoe-prints"></i>,
        "Stand Up Paddling":                <i className="fas fa-water"></i>,
        "Surfing":              <i className="fas fa-water"></i>,
        "Velomobile":               <i className="fas fa-car"></i>,
        "Virtual Ride":                 <i className="fas fa-vr-cardboard"></i>,
        "Virtual Run":              <i className="fas fa-vr-cardboard"></i>,
        "Weight Training":              <i className="fas fa-dumbbell"></i>,
        "Wheelchair":               <i className="fas fa-wheelchair"></i>,
        "Windsurf":                 <i className="fas fa-water"></i>,
        "Workout":              <i className="fas fa-dumbbell"></i>,
        "Yoga":                 <i className="fas fa-jedi"></i>,
        "Other":                <i className="fas fa-angle-double-up"></i>
    }
    return(
        bank[props.sport]
    )
}