import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    const {match, location, deleteAction} = props;
    let pathname = location.pathname;
    // debugger
    pathname = pathname.split("/");
    const selected = [
        pathname.includes("edit","delete") ? "":"show-selected",
        pathname.includes("edit") ? "show-selected":"",
        pathname.includes("delete") ? "show-selected":"",
    ]
    // debugger
    const id = match.params.routeId ? match.params.routeId : match.params.activityId;
    const type = match.params.routeId ? "routes":"activities"
return (<div className="show-profile container">
    <Link to={`/${type}/${id}`} className={`show-profile-link show-overview-link`}>
        <div className={`overview-empty ${selected[0]}`}></div>
        <div className={`show-profile-overview`}><div><p>Overview</p></div></div>
    </Link>
    <div className={`show-profile-links`}>
        <div className={`overview-empty ${selected[1]}`}></div>
        <Link to={`/${type}/${id}/edit`} className={`show-profile-link show-edit`}>
            <i className="fas fa-pen"></i>
        </Link>
        <div className={`show-profile-link show-link-right show-delete`} onClick={() => {
            props.history.replace(`/${type}`);
            // props.history.goBack();
            return deleteAction(id)
        }}>
            <i className="fas fa-trash"></i>
        </div>
    </div>
</div>)
}