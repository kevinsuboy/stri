import React from 'react';
import ActivitiesFeedItem from '../dashboard/feed/activities_feed_item'
import Overview from './overview'
import { Link } from 'react-router-dom';

class Activity extends React.Component {
    constructor(props) {
        // debugger
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchActivity(this.props.match.params.activityId);
    }
    render() {
        debugger
        const activityItems = this.props.activity.map(el => 
        { if(!el) debugger; return <ActivitiesFeedItem key={el.id} active={false} activity={el} username={this.props.username} descr={
            el.description ? <div key={el.id * 3} className="feed-description">
                <h3>Description</h3>
                <p>{el.description}</p>
            </div>: <div></div>
        }
        route = {
            el.route_id ?
            <div key={el.id * 4} className="feed-route">
                <Link to={`/routes/${el.route_id}`} className="feed-item-link">
                    <div key={el.route_id} className="feed-item-title">
                        <i className="fas fa-angle-double-up"></i> View Associated route
                    </div>
                </Link>
            </div> : <div></div>
        }/>});
        return (
            <div id="global-index">
                <div className="show-container container">
                    <Overview {...this.props}/>
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