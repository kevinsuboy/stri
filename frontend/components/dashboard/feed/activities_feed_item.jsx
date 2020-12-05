import React from 'react';
import SportLogo from '../sport_logo'
import FeedItem from './feed_item_skeleton'
import {calcTime} from '../../../util/calc_util'
import { Link } from 'react-router-dom';

export default ({ activity, username, descr, route, userId, active = true}) => {
    const d = new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    // debugger
    const {dur, pace} = calcTime(activity);
    const date = <p className="feed-item-date">{d}</p>
    const title =
        <Link to={`/activities/${activity.id}`} className={`feed-item-link ${active ? "":"feed-item-link-disabled"}`} onClick={active ? ()=>{} : (e)=>e.preventDefault()}>
            <div key={activity.id} className={`feed-item-title  ${active ? "":"feed-item-link-disabled"}`}>
            <SportLogo sport={activity.sport} />
            <p>{activity.title}</p>
        </div>
        </Link>
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
        <FeedItem activityId={activity.id} username={username} date={date} body={[title, stats, descr, route]} userId={userId} />
    )
}