import React from 'react';
import HeaderStats from './header_stats'
import Profile from '../../dashboard/profile/profile'

class User extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="global-user">
                <div className="user-show-header container">
                    {/* <h1>I am the user</h1> */}
                    <Profile {...this.props} />
                    <HeaderStats />
                </div>
            </div>
        )
    }
}

export default User;
