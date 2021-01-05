import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../../map/map_container'

export default ({username, date, body,activityId,userId, locations, map=true, routeId}) => {
    // debugger
    return (
<li key={activityId} className="feed-item">
    <div className={map ? `feed-item-left` : `feed-item-whole`}>
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
    {map ? <div className="feed-item-right">
        <Map locations={locations} routeId={routeId}/>
    </div> : null}
</li>
)}