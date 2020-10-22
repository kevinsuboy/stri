import React from 'react';
import SportLogo from '../sport_logo'
import FeedItem from './feed_item_skeleton'

const calcTime = (activity) => {
    let dur = new Date(activity.duration);
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
        pace
    }
}

export default ({activity,username}) => {
    const d = new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    // debugger
    const {dur, pace} = calcTime(activity);
    const date = <p className="feed-item-date">{d}</p>
    const title =
        <div key={activity.id} className="feed-item-title">
            <SportLogo sport={activity.sport} />
            <p>{activity.title}</p>
        </div>
    const stats =
        <div key={activity.id*2} className="feed-stats container">
            <div className="feed-stat-item stat-item item-left">
                <p className="feed-stat-title stat-title">Distance</p>
                <p className="feed-stat-value stat-value">{activity.distance.toFixed(2)} mi</p>
            </div>
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Pace</p>
                <p className="feed-stat-value stat-value">{pace.hours}{pace.minutes}{pace.seconds} /mi</p>
            </div>
            <div className="feed-stat-item stat-item item-right">
                <p className="feed-stat-title stat-title">Time</p>
                <p className="feed-stat-value stat-value">{dur.hours}{dur.minutes}{dur.seconds}</p>
            </div>
        </div>
    return (
        <FeedItem activityId={activity.id} username={username} date={date} body={[title,stats]}/>
    )
}