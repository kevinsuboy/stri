import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile'
import Feed from './feed'
import SideBar from './sidebar'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="dashboard-container container">
                {/* <h1>I am the Dashboard</h1> */}
                <Profile />
                <Feed />
                <SideBar />
            </div>
        )
    }
}
export default Dashboard;