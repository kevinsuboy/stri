import React from 'react';
import Overview from '../show/overview'
import EditActivityForm from './edit_activity_form'

class Activity extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
    }
    render() {
        return (
            <div id="global-index">
                <div className="show-container container">
                    <Overview match={this.props.match} location={this.props.location} />
                    <div className="show-body container">
                        <h1>Edit Activity</h1>
                        <EditActivityForm activityId={this.props.match.params.activityId} {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Activity;