import React from 'react';
import ActivitiesFeedItem from './activities_feed_item'

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.changeActivitiesFilter("recentDays",30);
        this.props.fetchFilteredUserActivities(this.props.userId);
    }
    componentWillUpdate() {
        this.props.clearActivitiesFilter();
    }
    render() {
        // debugger
        const activityItems = this.props.activities.map(el => <ActivitiesFeedItem key={el.id} activity={el} userId={this.props.userId} username={this.props.username}/>);
        return (
            <div className="feed-body-container feed-body-scroll">
                {/* <h1>I am the activities</h1> */}
                <ul className="feed-list">
                    {activityItems}
                </ul>
                <div className="feed-footer">
                    <p>No more activity in the last 30 days.<br />To see your full activity history, visit your Profile or Training page.</p>
                </div>
            </div>
        )
    }
}
export default Activities;