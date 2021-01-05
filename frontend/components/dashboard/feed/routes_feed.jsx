import React from 'react';
import RoutesFeedItem from './routes_feed_item'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillUnmount() {
        this.props.clearRoutesLoading();
    }
    componentDidMount() {
        // this.props.fetchUserRoutes(this.props.userId);
        // debugger
        this.props.changeRoutesFilter("recentDays", 30);
        this.props.fetchFilteredUserRoutes(this.props.userId)
            .then(el => {
                // console.log(el);
                for (const [key, value] of Object.entries(el.routes)) {
                    if(key !== "totalCnt") this.props.changeRoutesLoading(key,true)
                }
                return this.props.fetchAllLocations(Object.keys(el.routes))
            }
            );
    }
    componentWillUpdate() {
        this.props.clearRoutesFilter();
    }
    render() {
        // debugger
        const routeItems = this.props.routes.map((el, idx) =>
            <RoutesFeedItem
                key={el.id}
                route={el}
                userId={this.props.userId}
                username={this.props.username}
                locations={this.props.locations[el.id]}
                loadingId={idx}
            />
        );
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