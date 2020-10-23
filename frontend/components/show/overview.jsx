import React from 'react'
import { Link } from 'react-router-dom';

export default ({match,location}) => {
    const pathname = location.pathname;
    const selected = [
        pathname.split("/").includes("edit","delete") ? "":"show-selected",
        pathname.split("/").includes("edit") ? "show-selected":"",
        pathname.split("/").includes("delete") ? "show-selected":"",
    ]
    // debugger
    const id = match.params.routeId ? match.params.routeId : match.params.activityId;
    const type = match.params.routeId ? "routes":"activities"
return (<div className="show-profile container">
    <Link to={`/${type}/${id}`} className={`show-profile-link show-overview-link`}>
        <div className={`show-profile-overview ${selected[0]}`}><div><p>Overview</p></div></div>
    </Link>
    <div className={`show-profile-links ${selected[1]}`}>
        <Link to={`/${type}/${id}/edit`} className={`show-profile-link }`}>
            <i className="fas fa-pen"></i>
        </Link>
        <Link to={`/${type}/${id}/edit`} className={`show-profile-link show-link-right`}>
            <i className="fas fa-trash"></i>
        </Link>
    </div>
</div>)
}