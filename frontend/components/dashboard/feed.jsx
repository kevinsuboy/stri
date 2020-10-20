import React from 'react';
import Activities from './activities_feed'
import Routes from './routes_feed'
import { Link } from 'react-router-dom'

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFeed: null,
            display: null
        }
        this.toggleFeed = this.toggleFeed.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.fetchUserActivities(this.props.userId);
        this.props.fetchUserRoutes(this.props.userId);
    }
    handleClick(field){
        return () => {
            this.setState({display: field});
        }
    }
    toggleFeed(e){
        // debugger
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
                <div className="feed-header">
                <ul className="feed-group nav-group">
                    <li className={`feed-drop ${this.state.showFeed ? this.state.showFeed : ""}`} onClick={this.toggleFeed}>
                        {!this.state.display ? "Feed" : this.state.display}
                        <i className="fas fa-angle-down"></i>
                        <ul className="feed-drop-content dropdown-content container">
                            <li onClick={this.handleClick('Activity Feed')}><p>Activity Feed</p></li>
                            <li onClick={this.handleClick('Route Feed')}><p>Route Feed</p></li>
                        </ul>
                    </li>
                </ul>
                </div>
                <Activities />
                <Routes />
                <br/>
                <div className="feed-footer">
                    <p>No more activity in the last 60 days.<br/>To see your full activity history, visit your Profile or Training page.</p>
                </div>
            </div>
        )
    }
}
export default Feed;