import React from 'react';
import ActivityForm from '../activity_form'

class EditActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        // debugger
        return(
            <ActivityForm {...this.props}/>
        )
    }
}

export default EditActivityForm;
