import React from 'react';
import { calcTime } from '../../util/calc_util'
import { Link } from 'react-router-dom';
import SportLogo from '../dashboard/sport_logo'

export default ({ route,deleteRoute }) => {
    // debugger
    const { dur, pace } = calcTime(route);
    const d = new Date(route.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    return (
        <ul className={`index-item`}>
            {/* <li className="index-item-1 feed-item-title"><SportLogo sport={route.sport} /> {route.sport}</li> */}
            <Link to={`/routes/${route.id}`} className="index-link index-item-3"><li>{route.name}</li></Link>
            <li className="index-item-2">{d}</li>
            <li className="index-item-4">{dur.hours}{dur.minutes}{dur.seconds}</li>
            <li className="index-item-5">{pace.hours}{pace.minutes}{pace.seconds} /mi</li>
            <li className="index-item-6">{route.distance.toFixed(2)} mi</li>
            <Link to={`/routes/${route.id}/edit`} className="index-link index-item-edit"><li>{`Edit`}</li></Link>
            <li className="index-link index-item-delete" onClick={() => deleteRoute(route.id)}>Delete</li>
        </ul>
    )
}