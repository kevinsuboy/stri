import React from 'react';
import SportLogo from './sport_logo'

export default (props) => {
    // const inits = username.split(" ").map((word) => word[0]).join("");
    const {username,n_routes,n_activities,latest} = props;
    debugger
    return (
        <div className="dashboard-profile">
        <div className="profile-container">
            {/* <h1>I am the profile</h1> */}
            <div className="profile-icon-group">
            <div className="profile-nav">
                <img className="profile-pic" alt=""/>
                <p className="profile-username">{username}</p>
            </div>
            </div>
            <div className="profile-stats container">
                <div className="stat-item item-left">
                    <p className="stat-title">Routes</p>
                    <p className="stat-value">{n_routes}</p>
                </div>
                <div className="stat-item item-right">
                    <p className="stat-title">Activities</p>
                    <p className="stat-value">{n_activities}</p>
                </div>
            </div>
            <div className="profile-latest">

            </div>
            {/* <SportLogo sport="Run" /> */}
        </div>
        </div>
    )
}
