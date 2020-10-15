import React from 'react';
import { Link } from 'react-router-dom';
import GlobalNav from './globalnav'
import UserNav from './usernav'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
    }
    handleLoggedIn(){
        const {id,currentUser,logout} = this.props;
        debugger
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
        return(
            <nav className="nav-bar container">
                <div title="return to home" className="logo">
                    <Link to="/" className="logo-content link">
                        <p className="link-text">STRI</p>
                    </Link>
                </div>
                {this.handleLoggedIn()}
            </nav>
        )
    }
}

export default NavBar;