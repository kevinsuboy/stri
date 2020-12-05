import React from 'react';
import RoutesFeedItem from './routes_feed_item'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.fetchUserRoutes(this.props.userId);
        this.props.changeRoutesFilter("recentDays", 30);
        this.props.fetchFilteredUserRoutes(this.props.userId);
    }
    componentWillUpdate() {
        this.props.clearRoutesFilter();
    }
    render() {
        // debugger
        const routeItems = this.props.routes.map(el => <RoutesFeedItem key={el.id} route={el} username={this.props.username}/>);
        return (
            <div className="feed-body-container feed-body-scroll">
                {/* <h1>I am the activities</h1> */}
                <ul className="feed-list">
                    {routeItems}
                </ul>
                <div className="feed-footer">
                    <p>No more routes in the last 30 days.<br />To see your full route history, visit your Profile or Training page.</p>
                </div>
            </div>
        )
    }
}
export default Routes;