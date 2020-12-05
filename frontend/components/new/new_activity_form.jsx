import React from 'react';
import ActivityForm from '../form/activity_form'

class NewActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        // debugger
        return(
            <ActivityForm {...this.props} type="New Activity" newForm={true}/>
        )
    }
}

export default NewActivityForm;
