import React from 'react';
import ActivitiesFeedItem from '../dashboard/feed/activities_feed_item'
import Overview from './overview'

class Activity extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchActivity(this.props.match.params.activityId);
    }
    render() {
        debugger
        const activityItems = this.props.activity.map(el => <ActivitiesFeedItem key={el.id} activity={el} username={this.props.username}/>);
        return (
            <div id="global-index">
                <div className="show-container container">
                    <Overview match={this.props.match} location={this.props.location} />
                    <div className="show-body container">
                        <h1>My Activity</h1>
                        <div className="feed-body-container">
                        <ul className="feed-list">
                            {activityItems}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Activity;