import React from 'react';
import Activities from './activities_feed'
import Routes from './routes_feed'

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFeed: null
        }
        this.toggleFeed = this.toggleFeed.bind(this)
    }
    toggleFeed(e){
        debugger
        if(!this.state.showFeed){
            this.setState({ showFeed: "feed-show" })
        }else{
            this.setState({ showFeed: null })
        }
    }
    render() {
        // debugger
        return (
            <div className="dashboard-feed container">
                {/* <h1>I am the feed</h1> */}
                <ul className="feed-group nav-group">
                    <li className={`feed-drop ${this.state.showFeed ? this.state.showFeed : ""}`} onClick={this.toggleFeed}>Feed<i className="fas fa-angle-down"></i>
                        <ul className="feed-drop-content dropdown-content container">
                            <li><p>Activity Feed</p></li>
                            <li><p>Route Feed</p></li>
                        </ul>
                    </li>
                </ul>
                <Activities />
                <Routes />
            </div>
        )
    }
}
export default Feed;