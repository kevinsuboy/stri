import React from 'react';
import RouteForm from '../route_form'

class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // debugger
        return (
            <RouteForm {...this.props} />
        )
    }
}

export default EditActivityForm;
