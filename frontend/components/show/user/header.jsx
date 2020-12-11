import React from 'react';
import ProfileIcon from '../../dashboard/profile/profile_icon';
import ProfileStats from '../../dashboard/profile/profile_stats';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="user-show-header">
                <div className="profile-container">
                    <ProfileIcon {...this.props} />
                    <ProfileStats {...this.props} />
                </div>
                <div className="user-show-header-stats">
                    <h1>Hello World!</h1>
                </div>
            </div>
        )
    }
}

export default Header;
