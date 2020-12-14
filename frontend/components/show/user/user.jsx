import React from 'react';
import HeaderStats from './header_stats'
import Profile from '../../dashboard/profile/profile'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dated: {},
            n_dated: {},
            maxCnt: 0
        }
    }
    componentDidMount(){
        const startDate = new Date(new Date().getFullYear(), 0, 1)
        const endDate = new Date()
        const days = Math.ceil(endDate - startDate)/( 1000 * 3600 * 24);
        const dated = {};
        let maxCnt = 0;
        
        this.props.clearActivitiesFilter();
        this.props.changeActivitiesFilter("recentDays", days);
        this.props.fetchFilteredUserActivities(this.props.userId).then(()=>
            {
                this.props.activities.forEach(el => {
                    if(dated[el.date] === undefined) {
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
        )
    }
    render() {
        return (
            <div id="global-user">
                <div className="user-show-header container">
                    {/* <h1>I am the user</h1> */}
                    <Profile {...this.props} no_show_latest={true}/>
                    <HeaderStats
                        dated={this.state.dated}
                        n_dated={this.state.n_dated}
                        maxCnt={this.state.maxCnt}
                    />
                </div>
            </div>
        )
    }
}

export default User;
