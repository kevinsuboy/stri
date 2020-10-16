import React from 'react';
import Activities from './activities_feed'
import Routes from './routes_feed'

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="dashboard-feed container">
                {/* <h1>I am the feed</h1> */}
                <Activities />
                <Routes />
            </div>
        )
    }
}
export default Feed;