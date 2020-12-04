import React from 'react';
import NewActivityForm from './new_activity_form';

class NewActivity extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        debugger
    }
    render() {
        return (
            <div id="global-index">
                <div className="show-container container">
                    <div className="show-body container">
                        <h1>New Activity</h1>
                        <NewActivityForm {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default NewActivity;