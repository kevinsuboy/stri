import React from 'react';
import SportLogo from '../sport_logo'

export default ({activity,username}) => {
    // debugger
    const d = new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    return (
    <li className="feed-item">
        <div className="feed-item-header profile-nav">
            <img className="feed-pic profile-pic" alt="" />
            <div className="feed-header-body">
                <p className="feed-username profile-username">{username}</p>
                <p className="feed-item-date">{d}</p>
            </div>
        </div>
        <div className="feed-item-body">
            <SportLogo sport={activity.sport} />
            <p>{activity.title}</p>
        </div>
    </li>
    )
}