import React from 'react';
import UserCal from './user_cal'
import Profile from '../../dashboard/profile/profile'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dated: {},
            maxCnt: 0,
            mounted: false
        }
    }
    componentDidMount(){
        const endDate = new Date();
        const startDate = new Date(); startDate.setFullYear(endDate.getFullYear() - 1);
        const days = Math.ceil(endDate - startDate)/( 1000 * 3600 * 24);
        
        this.props.clearActivitiesFilter();
        this.props.changeActivitiesFilter("recentDays", days);
        this.props.fetchFilteredUserActivities(this.props.userId).then(() => this.setState({ mounted: true }))
    }
    componentWillReceiveProps(newProps){
        const dated = {};
        let maxCnt = 0;
        newProps.activities.forEach(el => {
            if (dated[el.date] === undefined) {
                dated[el.date] = [];
            }
            dated[el.date].push(el.id)
        })
        maxCnt = Math.max(...Object.values(dated).map(el => el.length))
        // debugger
        this.setState({
            dated,
            maxCnt
        })
    }
    render() {
        // if(this.props.activities.length !== 0) debugger
        return (
            <div id="global-user">
                <div className="user-show-header dashboard-container container">
                    {/* <h1>I am the user</h1> */}
                    <Profile {...this.props} no_show_latest={true}/>
                    <UserCal
                        allActivities={this.props.allActivities}
                        deleteActivity={this.props.deleteActivity}
                        activities={this.props.activities}
                        dated={this.state.mounted ? this.state.dated : []}
                        maxCnt={this.state.maxCnt}
                    />
                </div>

            </div>
        )
    }
}

export default User;
