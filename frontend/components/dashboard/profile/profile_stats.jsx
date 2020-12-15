import React from 'react';
import { Link } from 'react-router-dom';

export default ({ n_routes, n_activities, userId }) => {
    return (
        <div className="profile-stats container">
            <Link to={`/athlete/routes/1`} className="stat-item item-left">
                <p className="stat-title">Routes</p>
                <p className="stat-value">{n_routes}</p>
            </Link>
            <Link to={`/athlete/activities/1`} className="stat-item item-right">
                <p className="stat-title">Activities</p>
                <p className="stat-value">{n_activities}</p>
            </Link>
        </div>
    )
}