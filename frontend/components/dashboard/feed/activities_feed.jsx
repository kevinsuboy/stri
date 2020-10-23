import React from 'react';
import ActivitiesFeedItem from './activities_feed_item'

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.changeActivitiesFilter("recentDays",60);
        this.props.fetchFilteredUserActivities(this.props.userId);
    }
    componentWillUpdate() {
        this.props.clearActivitiesFilter();
    }
    render() {
        // debugger
        const activityItems = this.props.activities.map(el => <ActivitiesFeedItem key={el.id} activity={el} username={this.props.username}/>);
        return (
            <div className="feed-body-container">
                {/* <h1>I am the activities</h1> */}
                <ul className="feed-list">
                    {activityItems}
                </ul>
            </div>
        )
    }
}
export default Activities;