import React from 'react';
import ActivityForm from '../form/activity_form'

class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchActivity(this.props.activityId)
            .then((obj) =>
                this.props.fetchRoute(this.props.activity[0].route_id)
                // console.log(obj)
            )
    }
    render(){
        // debugger
        return(
            <ActivityForm {...this.props} type="Change" newForm={false}/>
        )
    }
}

export default EditActivityForm;
