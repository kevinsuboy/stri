import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../../map/map'

export default ({username, date, body,activityId,userId, locations}) => (
<li key={activityId} className="feed-item">
    <div className="feed-item-left">
    <Link to={`/athlete/${userId}`} key={activityId} className="feed-item-header profile-nav">
        <img className="feed-pic profile-pic" alt="" />
        <div className="feed-header-body">
            {/* <Link to={`/athlete/${userId}`} className="feed-username profile-username">{username}</Link> */}
            <p className="feed-username profile-username">{username}</p>
            {date}
        </div>
    </Link>
    {body[0]}
    {body[1]}
    {body[2]}
    {body[3]}
    </div>
    <div className="feed-item-right">
        <Map locations={locations}/>
    </div>
</li>
)