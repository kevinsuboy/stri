import React from 'react';
import Overview from '../show/overview'

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
                </div>
            </div>
        )
    }
}
export default Route;