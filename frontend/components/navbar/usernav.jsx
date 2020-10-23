import React from 'react';
import { Link } from 'react-router-dom';

export default ({username, logout}) => {
    const inits = username.split(" ").map((word) => word[0]).join("");
    // debugger
    return (
    <ul className="user-nav nav-group">
        <li className="nav-item dropdown-menu notifications">
                <i className="far fa-bell"></i>
                <ul className="dropdown-content container">
                    <li><p>You're all caught up!</p></li>
                </ul>
        </li>
        <li className="nav-item dropdown-menu circle nav-profile">
            <p>{inits}</p> <i className="fas fa-angle-down"></i>
            <ul className="dropdown-content container">
                <li><p>My Profile</p></li>
                <li onClick={logout}><p>Logout</p></li>
            </ul>
        </li>
    </ul>
    )
}