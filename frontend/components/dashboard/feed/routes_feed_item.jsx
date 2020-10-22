import React from 'react';
import FeedItem from './feed_item_skeleton'
import SportLogo from '../sport_logo'
import { calcTime } from '../../../util/calc_util'

export default ({ route, username }) => {
    const d = new Date(route.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const date = <p className="feed-item-date">{d}</p>
    // debugger
    const { dur, pace } = calcTime(route);
    const title =
        <div className="feed-item-title">
            <SportLogo sport={""} />
            <p>{route.name}</p>
        </div>
    const stats =
        <div className="feed-stats container">
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Distance</p>
                <p className="feed-stat-value stat-value">{route.distance.toFixed(2)} mi</p>
            </div>
            <div className="feed-stat-item stat-item">
                <p className="feed-stat-title stat-title">Estimated Pace</p>
                <p className="feed-stat-value stat-value">{pace.hours}{pace.minutes}{pace.seconds} /mi</p>
            </div>
            <div className="feed-stat-item stat-item item-right">
                <p className="feed-stat-title stat-title">Estimated Time</p>
                <p className="feed-stat-value stat-value">{dur.hours}{dur.minutes}{dur.seconds}</p>
            </div>
        </div>
    return (
        <FeedItem username={username} date={date} body={[title, stats]} />
    )
}