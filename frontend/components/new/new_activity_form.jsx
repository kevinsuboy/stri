import React from 'react';
import ActivityForm from '../activity_form'

class NewActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        // debugger
        return(
            <ActivityForm {...this.props} type="New Activity"/>
        )
    }
}

export default NewActivityForm;
