import React from 'react';

export default ({ n_routes, n_activities }) => {
    return (
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
    )
}