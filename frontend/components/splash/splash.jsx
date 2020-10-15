import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => (
    <div className="splash-container container">
        <div className="splash-container-img"></div>
        {/* <Link to="/login" className={`splash-login session-link link`}><p>Log In</p></Link> */}
        <Link to="/login" className={`splash-session splash-login session-link link`}><p>Log In</p></Link>
        <div className="hr"><div className="hr-text">or</div></div>
        <Link to="/signup" className={`splash-session splash-signup session-link link`}><p>Sign Up</p></Link>
    </div>
)