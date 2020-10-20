import React from 'react';

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUserRoutes(this.props.userId);
    }
    render() {
        return (
            <div className="feed-routes container">
                <h1>I am the routes</h1>
            </div>
        )
    }
}
export default Routes;