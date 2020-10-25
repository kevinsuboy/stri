import React from 'react';
import RoutesFeedItem from '../dashboard/feed/routes_feed_item'
import Overview from './overview'

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
                    <Overview {...this.props}/>
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