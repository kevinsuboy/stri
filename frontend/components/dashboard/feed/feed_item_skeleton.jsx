import React from 'react'

export default ({username, date, body}) => (
<li className="feed-item">
    <div className="feed-item-header profile-nav">
        <img className="feed-pic profile-pic" alt="" />
        <div className="feed-header-body">
            <p className="feed-username profile-username">{username}</p>
            {date}
        </div>
    </div>
    {body}
</li>
)