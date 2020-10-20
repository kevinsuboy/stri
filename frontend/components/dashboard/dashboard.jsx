import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile'
import Feed from './feed'
import SideBar from './sidebar'
import FeedContainer from './feed_container'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        // debugger
        return(
            <div id="global-dashboard">
            <div className="dashboard-container container">
                {/* <h1>I am the Dashboard</h1> */}
                <Profile {...this.props}/>
                <FeedContainer {...this.props}/>
                <SideBar />
            </div>
            </div>
        )
    }
}
export default Dashboard;