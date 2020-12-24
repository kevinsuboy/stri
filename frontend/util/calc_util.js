export const calcTime = (activity) => {
    // debugger
    let dur;
    if(activity.duration){
        dur = new Date(activity.duration)
    }else{
        dur = new Date(activity.estimated_duration)
    }
    dur = {
        hours: dur.getUTCHours(),
        minutes: dur.getUTCMinutes(),
        seconds: dur.getUTCSeconds(),
    }
    const totalTime = dur.hours * 60 * 60 + dur.minutes * 60 + dur.seconds;
    const paceTime = totalTime / activity.distance;
    const pace = {
        hours: Math.round(paceTime / 3600),
        minutes: Math.round((paceTime / 60) % 60),
        seconds: Math.round(paceTime % 60),
    }

    pace.seconds = pace.seconds.toString().padStart(2, '0');
    pace.minutes = pace.minutes.toString().padStart(2, '0');
    pace.hours = pace.hours.toString().padStart(2, '0');
    //
    pace.seconds = (pace.minutes === '00' && pace.hours === 0 && pace.seconds === '00') ? "" : pace.seconds;
    pace.minutes = (pace.minutes === '00' && pace.hours === 0) ? "" : pace.minutes + ":";
    pace.hours = pace.hours === '00' ? "" : pace.hours + ":";
    //
    dur.seconds = dur.seconds.toString().padStart(2, '0');
    dur.minutes = dur.minutes.toString().padStart(2, '0');
    dur.hours = dur.hours.toString().padStart(2, '0');
    //
    dur.seconds = (dur.minutes === '00' && dur.hours === 0 && dur.seconds === '00') ? "" : dur.seconds + "s ";
    dur.minutes = (dur.minutes === '00' && dur.hours === 0) ? "" : dur.minutes + "m ";
    dur.hours = dur.hours === '00' ? "" : dur.hours + "h ";
    return {
        dur,
        paceTime,
        pace
    }
}
export const convertLocations = (locations)=>{
    return locations.order.map(id =>
        Object.assign({}, { lat: parseFloat(locations[id].lat), lng: parseFloat(locations[id].lng) })
    );
}
