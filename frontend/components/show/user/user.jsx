import React from 'react';
import Header from './header'

class User extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="global-user">
                <div className="user-show-container container">
                    {/* <h1>I am the user</h1> */}
                    <Header {...this.props} />
                </div>
            </div>
        )
    }
}

export default User;
