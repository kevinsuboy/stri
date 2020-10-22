import React from 'react';

class Route extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        debugger
        this.props.fetchRoute(this.props.match.params.routeId);
    }
    render() {
        // debugger
        return (
            <div id="global-show">
                <div className="show-container container">
                    <h1>My Route</h1>
                    <ul className="show-item">
                    </ul>
                </div>
            </div>
        )
    }
}
export default Route;