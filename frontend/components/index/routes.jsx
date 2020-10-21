import React from 'react';

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUserRoutes(this.props.userId);
    }
    render() {
        // debugger
        return (
            <div className="index-body-container">
                {/* <h1>I am the activities</h1> */}
                <ul className="index-list">
                </ul>
            </div>
        )
    }
}
export default Routes;