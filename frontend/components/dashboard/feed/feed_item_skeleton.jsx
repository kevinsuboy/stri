import React from 'react'

export default ({username, date, body,activityId}) => (
<li key={activityId} className="feed-item">
    <div key={activityId} className="feed-item-header profile-nav">
        <img className="feed-pic profile-pic" alt="" />
        <div className="feed-header-body">
            <p className="feed-username profile-username">{username}</p>
            {date}
        </div>
    </div>
    {body}
</li>
)