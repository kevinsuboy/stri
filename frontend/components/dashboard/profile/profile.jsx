import React from 'react';
import SportLogo from '../sport_logo'
import { Link } from 'react-router-dom'
import ProfileIcon from './profile_icon';
import ProfileStats from './profile_stats';
import UserStats from '../../show/user/user_stats'

export default (props) => {
    // const inits = username.split(" ").map((word) => word[0]).join("");
    const {latest, no_show_latest} = props;
    // debugger
    const latest_el = latest ? 
        <div className="latest-body">
            <SportLogo sport={latest.sport} />
            <Link to={`/activities/${latest.id}`} className={`latest-link`}><span>{latest.title}</span> • {latest.date}</Link>
        </div> : <div className="latest-null">
            <SportLogo sport={""} />
            <span>No Activity to Show</span>
        </div>;
    const profile_latest = no_show_latest ?
        null : <div className="profile-latest">
            <p className="latest-header">Latest Activity</p>
            {latest_el}
        </div>;
    // const profile_stats = no_show_latest ? <div className="profile-latest-clear"></div>:null;
    const user_stats = no_show_latest ? <div className="user-show-body dashboard-container container">
        <UserStats {...props} />
    </div> : null;
    return (
        <div className="dashboard-profile container">
        <div className="profile-container">
            <ProfileIcon {...props}/>
            <ProfileStats {...props}/>
            {profile_latest}
        </div>
            {/* {profile_stats} */}
            {user_stats}
        </div>
    )
}