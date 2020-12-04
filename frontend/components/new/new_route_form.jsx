import React from 'react';
import RouteForm from '../form/route_form'

class NewRouteForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        // debugger
        return(
            <RouteForm {...this.props} type="New Route"/>
        )
    }
}

export default NewRouteForm;
