import React from 'react';
import Map from '../map/map'
import RouteFormContent from './route_form_content'

import RouteErrorContainer from './route_form_error_container'

class RouteForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        debugger
        return (
            <div className={`activity-edit-form route-form`}>
                <div className="activity-edit-form-body">
                    <RouteFormContent {...this.props} />
                    <Map locations={this.props.locations}
                        draggable={true}
                        handleCoordChange={this.handleCoordChange}
                    />
                </div>
            </div>
        )
    }
}

export default RouteForm;