import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => (
    <div className="splash-container">
    <h1>The #1 app for elite athletes</h1>
    <div className="splash-group container">
        <div><img className="splash-container-img"></img></div>
        {/* <Link to="/login" className={`splash-login session-link link`}><p>Log In</p></Link> */}
        <div className="splash-session-group">
                <Link to="/" className={`splash-session splash-demo session-link link`}>
                    <i className="fas fa-laptop-code"></i><p>Demo User</p></Link>
            <div className="hr"><div className="hr-text">or</div></div>
                <Link to="/signup" className={`splash-session splash-signup session-link link`}>
                    <i className="far fa-envelope"></i><p>Sign Up</p></Link>
        </div>
    </div>
    </div>
)