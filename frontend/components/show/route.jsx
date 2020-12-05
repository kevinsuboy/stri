import React from 'react';
import RoutesFeedItem from '../dashboard/feed/routes_feed_item'
import Overview from './overview'
import ActivitiesTable from '../index/activities_table'

class Route extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchRoute(this.props.match.params.routeId);
        this.props.fetchRouteActivities(this.props.match.params.routeId);
    }
    render() {
        const routeItems = [];
        const activityItems = [];
        this.props.route.forEach(el => {
            routeItems.push(<RoutesFeedItem key={el.id} route={el} username={this.props.username} active={false}/>);
            // el.activity ? el.activity.forEach(act => activityItems.push(<li>{`${act.title}`}</li>)) : null;
        });
        debugger
        return (
            <div id="global-index">
                <div className="show-container container">
                    <Overview {...this.props}/>
                    <div className="show-body container">
                        <h1>My Route</h1>
                        <div className="feed-body-container">
                            <ul className="feed-list">
                                {routeItems}
                            </ul>
                            {/* <ul className="feed-list-2">
                                {activityItems}
                            </ul> */}
                            <ActivitiesTable {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Route;