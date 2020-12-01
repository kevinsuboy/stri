import React from 'react';
import FilterForm from '../search/filter_form'
import ActivitiesTable from './activities_table'
import { Link } from 'react-router-dom';

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchUserActivities(this.props.userId);
    }
    componentWillUnmount() {
        this.props.clearActivitiesFilter();
    }
    render() {
        // debugger
        return (
            <div id="global-index">
            <div className="index-container container">
                <h1>My Activities</h1>
                <Link to={`activities/new`} className={`new-activity-link`}>Create a New Activity</Link>
                <ul className="index-list">
                    <FilterForm sport={true} userId={this.props.userId} submitFilter={this.props.fetchFilteredUserActivities} changeFilter={this.props.changeActivitiesFilter}/>
                    <ActivitiesTable {...this.props}/>
                </ul>
            </div>
            </div>
        )
    }
}
export default Activities;