import React from 'react';
import ActivitiesFeedItem from '../dashboard/feed/activities_feed_item'
import { Link } from 'react-router-dom';

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
                    <div className="show-profile container">
                        <div className="show-profile-overview "><p>Overview</p></div>
                        <div className="show-profile-links ">
                            <Link to={`/activities/${this.props.match.params.activityId}/edit`} className="show-profile-link">
                                <i className="fas fa-pen"></i>
                            </Link>
                            <Link to={`/activities/${this.props.match.params.activityId}/edit`} className="show-profile-link">
                                <i className="fas fa-trash"></i>
                            </Link>
                        </div>
                    </div>
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