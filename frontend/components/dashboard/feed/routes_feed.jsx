import React from 'react';
import RoutesFeedItem from './routes_feed_item'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchUserRoutes(this.props.userId);
        this.props.updateUserRoutesFilter("recentDays",60)(this.props.userId);
    }
    render() {
        // debugger
        const routeItems = this.props.routes.map(el => <RoutesFeedItem key={el.id} route={el} username={this.props.username} />);
        return (
            <div className="feed-body-container">
                {/* <h1>I am the activities</h1> */}
                <ul className="feed-list">
                    {routeItems}
                </ul>
            </div>
        )
    }
}
export default Routes;