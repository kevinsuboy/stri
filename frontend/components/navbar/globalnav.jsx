import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <ul className="global-nav nav-group">
            <li className="nav-item dropdown-menu">Dashboard<i className="fas fa-angle-down"></i>
                <ul className="dropdown-content container">
                    <li><p>Activity Feed</p></li>
                    <li><p>Route Feed</p></li>
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