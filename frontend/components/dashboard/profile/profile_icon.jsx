import React from 'react';
import { Link } from 'react-router-dom'

export default ({username,userId}) => {
    return (
        <div className="profile-icon-group">
            <Link to={`/athlete/${userId}`} className="profile-nav">
                <img className="profile-pic" alt="" />
                <p className="profile-username">{username}</p>
            </Link>
        </div>
    )
}