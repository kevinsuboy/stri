import React from 'react';
import ActivitiesFeedItem from './activities_feed_item'

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUserActivities(this.props.userId);
    }
    render() {
        debugger
        const activityItems = this.props.activities.map(el => <ActivitiesFeedItem key={el.id} activity={el} />);
        return (
            <div className="feed-body-container container">
                {/* <h1>I am the activities</h1> */}
                <ul className="feed-list">
                {activityItems}
                </ul>
            </div>
        )
    }
}
export default Activities;