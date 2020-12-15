import React from 'react';
import {sportBlock} from '../../search/filter_util'

export default (props) => {
    // debugger
    const d = new Date();
    let totalDist = 0;
    props.activities.forEach(el => totalDist += el.distance)
    let totalTime = 0;
    let dur;
    props.activities.forEach(el => {
        dur = new Date(el.duration);
        totalTime += dur.getUTCHours() * 60 * 60 + dur.getUTCMinutes() * 60 + dur.getUTCSeconds();
    })
    // debugger
    dur = {
        hours: Math.round(totalTime / 3600),
        minutes: Math.round((totalTime / 60) % 60),
        seconds: Math.round(totalTime % 60),
    }
    return (
        <div className="user-stats">
            <h1>My Stats</h1>
            {sportBlock(() => {})}
            <h2>{d.getFullYear()}</h2>
            <div className="ytd-stats">
            <p>Total Distance: {totalDist.toFixed(2)}</p>
            <p>Total Time: {dur.hours}h {dur.minutes}m {dur.seconds}s </p>
            <p>Total Activities: {props.activities.length}</p>
            </div>
        </div>
    )
}