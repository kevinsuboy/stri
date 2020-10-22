import React from 'react';
import { calcTime } from '../../util/calc_util'
import { Link } from 'react-router-dom';
import SportLogo from '../dashboard/sport_logo'

export default ({ activity}) => {
    // debugger
    const { dur, pace } = calcTime(activity);
    const d = new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    return (
        <ul className={`index-item`}>
            <li className="index-item-1 feed-item-title"><SportLogo sport={activity.sport} /> {activity.sport}</li>
            <li className="index-item-2">{d}</li>
            <Link className="index-link index-item-3"><li>{activity.title}</li></Link>
            <li className="index-item-4">{dur.hours}{dur.minutes}{dur.seconds}</li>
            <li className="index-item-5">{pace.hours}{pace.minutes}{pace.seconds} /mi</li>
            <li className="index-item-6">{activity.distance.toFixed(2)} mi</li>
            <Link className="index-link index-item-edit"><li>{`Edit`}</li></Link>
            <Link className="index-link index-item-delete"><li>Delete</li></Link>
        </ul>
    )
}