import React from 'react';
import FeedItem from './feed_item_skeleton'
import SportLogo from '../sport_logo'

export default ({ route, username }) => {
    const d = new Date(route.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    const date = <p className="feed-item-date">{d}</p>
    // debugger
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
        </div>
    return (
        <FeedItem username={username} date={date} body={[title, stats]} />
    )
}