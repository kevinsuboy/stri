import React from 'react';
import SportLogo from '../sport_logo'

export default ({activity,username}) => {
    const d = new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    let dur = new Date(activity.duration);
    dur = {
        hours: dur.getUTCHours(),
        minutes: dur.getUTCMinutes(),
        seconds: dur.getUTCSeconds(),
    }
    const totalTime = dur.hours*60*60 + dur.minutes*60 + dur.seconds;
    const paceTime = totalTime/activity.distance;
    const pace = {
        hours: Math.round(paceTime/3600),
        minutes: Math.round((paceTime/60)%60),
        seconds: Math.round(paceTime%60),
    }
    debugger
    return (
    <li className="feed-item">
        <div className="feed-item-header profile-nav">
            <img className="feed-pic profile-pic" alt="" />
            <div className="feed-header-body">
                <p className="feed-username profile-username">{username}</p>
                <p className="feed-item-date">{d}</p>
            </div>
        </div>
        <div className="feed-item-title">
            <SportLogo sport={activity.sport} />
            <p>{activity.title}</p>
        </div>
        <div className="feed-stats container">
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Distance</p>
                <p className="feed-stat-value stat-value">{activity.distance.toFixed(2)} mi</p>
            </div>
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Pace</p>
                <p className="feed-stat-value stat-value">{pace.hours}:{pace.minutes}:{pace.seconds} /mi</p>
            </div>
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Time</p>
                <p className="feed-stat-value stat-value">{dur.hours}h {dur.minutes}m {dur.seconds}s</p>
            </div>
        </div>
    </li>
    )
}