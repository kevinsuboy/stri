import React from 'react';
import { Link } from 'react-router-dom';

export default ({selected}) => {
    // debugger
    return (
        <ul className="global-nav nav-group">
            <li className={`nav-item dropdown-menu ${selected.slice(0,2).some(el => el) ? "nav-menu-selected":""}`}>Dashboard<i className="fas fa-angle-down"></i>
                <ul className={`dropdown-content container`}>
                    <Link to="/dashboard/activities" className="nav-link"><li className={selected[0]}><p>Activity Feed</p></li></Link>
                    <Link to="/dashboard/routes" className="nav-link"><li className={selected[1]}><p>Route Feed</p></li></Link>
                </ul>
            </li>
            <li className={`nav-item dropdown-menu ${selected.slice(2).some(el => el) ? " nav-menu-selected":""}`}>Training<i className="fas fa-angle-down"></i>
                <ul className="dropdown-content container">
                    <Link to="/athlete/activities/1" className="nav-link"><li className={selected[2]}><p>My Activities</p></li></Link>
                    <Link to="/athlete/routes/1" className="nav-link"><li className={selected[3]}><p>My Routes</p></li></Link>
                </ul>
            </li>
            {/* <li className="nav-item dropdown-menu">Explore<i className="fas fa-angle-down"></i>
                <ul className="dropdown-content container">
                    <li><p>Route Search</p></li>
                </ul>            
            </li> */}
        </ul>
    )
}