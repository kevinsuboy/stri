import React from 'react';
import RouteForm from '../form/route_form'

class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchRoute(this.props.routeId);
    }
    render() {
        // debugger
        return (
            <RouteForm {...this.props} type="Change" newForm={false}/>
        )
    }
}

export default EditActivityForm;
