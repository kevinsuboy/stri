import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="dashboard container">
                <h1>I am the Dashboard</h1>
            </div>
        )
    }
}
export default Dashboard;