import React from 'react';
import { Link } from 'react-router-dom';

export default ({selected}) => {
    debugger
    return (
        <ul className="global-nav nav-group">
            <li className={`nav-item dropdown-menu ${selected.some(el => el) ? "nav-menu-selected":""}`}>Dashboard<i className="fas fa-angle-down"></i>
                <ul className={`dropdown-content container`}>
                    <li className={selected[0]}><p>Activity Feed</p></li>
                    <li className={selected[1]}><p>Route Feed</p></li>
                </ul>
            </li>
            <li className="nav-item dropdown-menu">Training<i className="fas fa-angle-down"></i>
                <ul className="dropdown-content container">
                    <li><p>My Activities</p></li>
                    <li><p>My Routes</p></li>
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