import React from 'react';
import ActivityForm from '../activity_form'

class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchActivity(this.props.activityId);
    }
    render(){
        // debugger
        return(
            <ActivityForm {...this.props} type="Change"/>
        )
    }
}

export default EditActivityForm;
