import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
    }
    handleLoggedIn(){
        const {id} = this.props;
        const {pathname} = this.props.location;
        // debugger
        if(!id){ // not logged in
            let navBarClass = "nav-bar-login";
            let btnText = "Log In"
            let newPathName = "/login"
            if(pathname === "/login"){
                navBarClass = "nav-bar-signup";
                btnText = "Sign Up";
                newPathName = "/signup"
            }
            return <Link to={newPathName} className={`${navBarClass} session-link link`}><p>{btnText}</p></Link>
        }
    }
    render(){
        return(
            <nav className="nav-bar container">
                <div title="return to home" className="logo">
                    <Link to="/" className="logo-content link">
                        <p className="link-text">STRI</p>
                    </Link>
                </div>
                <div className="nav-bar-content">
                {this.handleLoggedIn()}
                {/* {logoutButton} */}
                </div>
            </nav>
        )
    }
}

export default NavBar;