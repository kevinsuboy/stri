import React from 'react';
import ActivitiesContainer from './activity_feed_container'
import RoutesContainer from './route_feed_container'
import { Link } from 'react-router-dom'
import {ProtectedRoute} from '../../../util/route_util'

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFeed: null,
        }
        this.display = null
        this.toggleFeed = this.toggleFeed.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.watchOutside();
    }
    // componentDidMount(){
    //     this.props.fetchUserActivities(this.props.userId);
    //     this.props.fetchUserRoutes(this.props.userId);
    // }
    watchOutside() {
        document.addEventListener("click", (e) => {
            const feed_show = document.getElementsByClassName("feed-show");
            // debugger
            for (let fc of feed_show) {
                // debugger
                if (!fc.contains(e.target)) {
                    fc.classList.remove('feed-show')
                    this.setState({ showFeed: null })
                }
            }
        })
    }
    handleClick(field){
        // debugger
        return () => {
            // this.setState({display: field});
            this.props.history.push(`/dashboard/${field === "Activity Feed" ? "activities":"routes"}`)
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
        const { pathname } = this.props.location;
        switch(pathname){
            case "/dashboard/activities":
                this.display = "Activity Feed";
                break;
            case "/dashboard/routes":
                this.display = "Route Feed";
                break;
            default:
                this.display = null;
                break;
        }
        // debugger
        return (
            <div className="dashboard-feed container">
                {/* <h1>I am the feed</h1> */}
                <div className="feed-header">
                <ul className="feed-group nav-group">
                    <li className={`feed-drop ${this.state.showFeed ? this.state.showFeed : ""}`} onClick={this.toggleFeed}>
                        {!this.display ? "Feed" : this.display}
                        <i className="fas fa-angle-down"></i>
                        <ul className="feed-drop-content dropdown-content container">
                            <li onClick={this.handleClick('Activity Feed')}><p>Activity Feed</p></li>
                            <li onClick={this.handleClick('Route Feed')}><p>Route Feed</p></li>
                        </ul>
                    </li>
                </ul>
                </div>
                <ProtectedRoute exact path="/dashboard/activities" component={ActivitiesContainer} />
                <ProtectedRoute exact path="/dashboard/routes" component={RoutesContainer} />
                <br/>
            </div>
        )
    }
}
export default Feed;