import React from 'react';

class Activities extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUserActivities(this.props.userId);
    }
    render() {
        return (
            <div className="feed-activities container">
                {/* <h1>I am the activities</h1> */}
            </div>
        )
    }
}
export default Activities;