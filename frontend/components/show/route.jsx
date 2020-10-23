import React from 'react';
import RoutesFeedItem from '../dashboard/feed/routes_feed_item'
import { Link } from 'react-router-dom';

class Route extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchRoute(this.props.match.params.routeId);
    }
    render() {
        // debugger
        const routeItems = this.props.route.map(el => <RoutesFeedItem key={el.id} route={el} username={this.props.username} />);
        return (
            <div id="global-index">
                <div className="show-container container">
                    <div className="show-profile container">
                        <div className="show-profile-overview "><p>Overview</p></div>
                        <div className="show-profile-links ">
                            <Link to={`/activities/${this.props.match.params.activityId}/edit`} className="show-profile-link">
                                <i className="fas fa-pen"></i>
                            </Link>
                            <Link to={`/activities/${this.props.match.params.activityId}/edit`} className="show-profile-link">
                                <i className="fas fa-trash"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="show-body container">
                        <h1>My Route</h1>
                        <div className="feed-body-container">
                            <ul className="feed-list">
                                {routeItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Route;