import React from 'react';
import Overview from '../show/overview'
import EditRouteForm from './edit_route_form'

class Route extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        // this.props.fetchActivity(this.props.match.params.activityId);
    }
    render() {
        return (
            <div id="global-index">
                <div className="show-container container">
                    <Overview match={this.props.match} location={this.props.location} />
                    <div className="show-body container">
                        <h1>Edit Route</h1>
                        <EditRouteForm routeId={this.props.match.params.routeId} {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Route;