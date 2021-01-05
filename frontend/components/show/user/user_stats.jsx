import React from 'react';
import {sportBlock} from '../../search/filter_util'
import SportLogo from '../../dashboard/sport_logo'

class UserStats extends React.Component {
    // debugger
    constructor(props){
        super(props)
        this.state = {
            sport: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(field){
        return e => {
            // debugger
            this.setState({[field]: e.currentTarget.value})
        }
    }
    render() {
        const d = new Date();
        let totalDist = 0;
        this.props.activities.forEach(el => totalDist += el.distance)
        let totalTime = 0;
        let dur;
        this.props.activities.forEach(el => {
            dur = new Date(el.duration);
            totalTime += dur.getUTCHours() * 60 * 60 + dur.getUTCMinutes() * 60 + dur.getUTCSeconds();
        })
        // debugger
        dur = {
            hours: Math.round(totalTime / 3600),
            minutes: Math.round((totalTime / 60) % 60),
            seconds: Math.round(totalTime % 60),
        }
        //! Sport filter
        const s_Act = this.props.activities.filter(el => el.sport === this.state.sport);
        let s_totalDist = 0;
        s_Act.forEach(el => s_totalDist += el.distance)
        let s_totalTime = 0;
        let s_dur;
        s_Act.forEach(el => {
            s_dur = new Date(el.duration);
            s_totalTime += s_dur.getUTCHours() * 60 * 60 + s_dur.getUTCMinutes() * 60 + s_dur.getUTCSeconds();
        })
        s_dur = {
            hours: Math.round(s_totalTime / 3600),
            minutes: Math.round((s_totalTime / 60) % 60),
            seconds: Math.round(s_totalTime % 60),
        }

        return (
            <div className="user-stats">
                <h1>My Stats</h1>
                {sportBlock(this.handleChange)}
                <h2>{d.getFullYear()}</h2>
                <div className="ytd-stats">
                    <div className="ytd-stat-item"><p><i className="fas fa-route"></i> Total Distance:</p>     <p>{totalDist.toFixed(2)} mi                      </p></div>
                    <div className="ytd-stat-item"><p><i className="far fa-clock"></i> Total Time:</p>         <p>{dur.hours}h {dur.minutes}m {dur.seconds}s </p></div>
                    <div className="ytd-stat-item"><p>Total Activities:</p>   <p>{this.props.activities.length}                                   </p></div>
                </div>
                <h2><SportLogo sport={this.state.sport} />{this.state.sport === "" ? "No Sport Selected" : this.state.sport}</h2>
                <div className="ytd-stats">
                    <div className="ytd-stat-item"><p><i className="fas fa-route"></i> Total Distance:</p>     <p>{s_totalDist.toFixed(2)} mi                      </p></div>
                    <div className="ytd-stat-item"><p><i className="far fa-clock"></i> Total Time:</p>         <p>{s_dur.hours}h {s_dur.minutes}m {s_dur.seconds}s </p></div>
                    <div className="ytd-stat-item"><p>Total Activities:</p>   <p>{s_Act.length}                                   </p></div>
                </div>
            </div>
        )

    }
}

export default UserStats