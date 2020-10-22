import React from 'react';
import FilterForm from '../search/filter_form'
import ActivitiesTable from './activities_table'

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchUserActivities(this.props.userId);
    }
    render() {
        debugger
        return (
            <div id="global-index">
            <div className="index-container container">
                <h1>My Activities</h1>
                <ul className="index-list">
                    <FilterForm submitFilter={this.props.updateUserActivitiesFilter}/>
                    <ActivitiesTable {...this.props}/>
                </ul>
            </div>
            </div>
        )
    }
}
export default Activities;