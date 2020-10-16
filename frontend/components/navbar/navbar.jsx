import React from 'react';
import { Link } from 'react-router-dom';
import GlobalNav from './globalnav'
import UserNav from './usernav'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    handleLoggedIn(){
        const {id,currentUser,logout} = this.props;
        // debugger
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
            return (
                <div className="nav-bar-content">
                    <div></div>
                    <Link to={newPathName} className={`${navBarClass} session-link link`}><p>{btnText}</p></Link>
                </div>
            )
        }else{
            const username = currentUser[id].username;
            return (
                <div className="nav-bar-content">
                    <GlobalNav />
                    <UserNav username={username} logout={logout}/>
                </div>
            )
        }
    }
    render(){
        let header = undefined;
        let footer = undefined;
        let footerClassName = undefined;
        if(this.props.header) header = this.handleLoggedIn();
        else {
            footerClassName = "logo-footer"
            footer = <ul className="footer-links">
                <li className="nav-item"><a href="https://github.com/kevinsuboy" target="_blank"><i className="fab fa-github"></i></a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/kevin-su-2700a859/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        }
        return(
            <nav className="nav-bar container">
                <div title="return to home" className="logo">
                    <Link to="/" className={`logo-content link ${footerClassName}`}>
                        <p className="link-text">STRI</p>
                    </Link>
                </div>
                {header}
                {footer}
            </nav>
        )
    }
}

export default NavBar;