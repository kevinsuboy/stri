import React from 'react';
import RoutesFeedItem from '../dashboard/feed/routes_feed_item'

class ActivityRouteItem extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchRoute(this.props.routeId);
        this.props.fetchRouteLocations(this.props.routeId);
    }
    render() {
        const routeItems = [];
        // if(!this.props.route.forEach) debugger
        // if(this.props.route(this.props.routeId).forEach) debugger
        this.props.route(this.props.routeId).forEach(el => {
            routeItems.push(
                <RoutesFeedItem key={el.id}
                    route={el}
                    username={this.props.username}
                    userId={this.props.userId}
                    active={false}
                    descr={
                        el.description ? <div key={el.id * 3} className="feed-description">
                            <h3>Description</h3>
                            <p>{el.description}</p>
                        </div> : <div></div>
                    }
                    locations={this.props.locations}
                />
            );
        });
        return (
            <div id="global-index">
                <div className="show-container container">
                    <div className="show-body container">
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
export default ActivityRouteItem;