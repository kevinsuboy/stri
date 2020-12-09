import React from 'react';
import { calcTime } from '../../util/calc_util'
import { Link } from 'react-router-dom';
import SportLogo from '../dashboard/sport_logo'

export default ({ route,deleteRoute, options }) => {
    // debugger
    const { dur, pace } = calcTime(route);
    const d = new Date(route.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    let title, date, time, pace_opt, dist, ed;
    if (options) {
        ({ title, date, time, pace:pace_opt, dist, ed } = options);
        [title, date, time, pace_opt, dist,ed] = [title, date, time, pace_opt, dist,ed].map(el => el === undefined ? true : false);
    } else {
        [title, date, time, pace_opt, dist,ed] = [true, true, true, true, true, true];
    }
    let t, da, ti, pa, di, l1, l2;
    if(title) t = <Link to={`/routes/${route.id}`} className="index-link index-item-3"><li>{route.name}</li></Link>
    if(date) da = <li className="index-item-2">{d}</li>
    if(time) ti = <li className="index-item-4">{dur.hours}{dur.minutes}{dur.seconds}</li>
    if(pace_opt) pa = <li className="index-item-5">{pace.hours}{pace.minutes}{pace.seconds} /mi</li>
    if(dist) di = <li className="index-item-6">{route.distance.toFixed(2)} mi</li>
    if(ed){
        l1 = <Link to={`/routes/${route.id}/edit`} className="index-link index-item-edit"><li>{`Edit`}</li></Link>
        l2 = <li className="index-link index-item-delete" onClick={() => deleteRoute(route.id)}>Delete</li>
    } else {
        l1 = <li className="index-link index-item-edit index-item-select session-link link">Select</li>
    }
    return (
        <ul className={`index-item`}>
            {/* <li className="index-item-1 feed-item-title"><SportLogo sport={route.sport} /> {route.sport}</li> */}
            {t}
            {da}
            {ti}
            {pa}
            {di}
            {l1}
            {l2}
        </ul>
    )
}