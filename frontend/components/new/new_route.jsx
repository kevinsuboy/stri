import React from 'react';
import NewRouteForm from './new_route_form';

class NewRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
    }
    render() {
        return (
            <div id="global-index">
                <div className="show-container container">
                    <div className="show-body container">
                        <h1>New Route</h1>
                        <NewRouteForm {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default NewRoute;