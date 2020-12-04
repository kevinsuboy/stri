import React from 'react';
import { calcTime } from '../util/calc_util'
import { Redirect } from 'react-router-dom';
import DurDist from './durDist';
import TitleDescr from './titleDescr';

const sport = (onChange, defaultSport) => (
<div className="sport-input">
    <label>Sport</label>
    <select onChange={onChange} className="filter-select session-input" name="sport"
        value={defaultSport}
    // onChange={handleChange("sport")}
    >
        <option defaultValue="" disabled hidden>All Sport Types</option>
        <option value="Ride">Ride</option>
        <option value="Run">Run</option>
        <option value="Swim">Swim</option>
        <option value="Hike">Hike</option>
        <option value="Walk">Walk</option>
        <option value="Alpine_Ski">Alpine_Ski</option>
        <option value="Backcountry Ski">Backcountry Ski</option>
        <option value="Canoe">Canoe</option>
        <option value="Crossfit">Crossfit</option>
        <option value="E-Bike">E-Bike</option>
        <option value="Elliptical">Elliptical</option>
        <option value="Handcycle">Handcycle</option>
        <option value="Ice Skate">Ice Skate</option>
        <option value="Inline Skate">Inline Skate</option>
        <option value="Kayaking">Kayaking</option>
        <option value="Kitesurf">Kitesurf</option>
        <option value="Nordic Ski">Nordic Ski</option>
        <option value="Rock Climb">Rock Climb</option>
        <option value="Roller Ski">Roller Ski</option>
        <option value="Rowing">Rowing</option>
        <option value="Snowboard">Snowboard</option>
        <option value="Snowshoe">Snowshoe</option>
        <option value="Stair-Stepper">Stair-Stepper</option>
        <option value="Stand Up">Stand Up</option>
        <option value="Surfing">Surfing</option>
        <option value="Velomobile">Velomobile</option>
        <option value="Virtual Ride">Virtual Ride</option>
        <option value="Virtual Run">Virtual Run</option>
        <option value="Weight Training">Weight Training</option>
        <option value="Wheelchair">Wheelchair</option>
        <option value="Windsurf">Windsurf</option>
        <option value="Workout">Workout</option>
        <option value="Yoga">Yoga</option>
        <option value="Other">Other</option>
    </select>
</div>
)

class ActivityForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            distance: "",
            duration: { hours: "0h ", minutes: "0m ", seconds: "0s "},
            title: "",
            description: "",
            date: "",
            sport: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidUpdate(ownProps){
        // debugger
        if(this.props.activity && this.props.activity[0] && this.props.activity !== ownProps.activity){
            const res = calcTime(this.props.activity[0]);
            this.setState({
                duration: res.dur,
                distance: this.props.activity[0].distance,
                title: this.props.activity[0].title,
                description: this.props.activity[0].description,
                date: this.props.activity[0].date,
                sport: this.props.activity[0].sport
            })
        }
    }
    handleChange(field) {
        // debugger
        if (field !== "hours" && field !== "minutes" && field !== "seconds"){
            return e => this.setState({
                [field]: e.currentTarget.value
            });
        }else{
            return e => this.setState({
                duration: Object.assign({},this.state.duration,
                    {[field]: e.currentTarget.value})
            });
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const {duration} = this.state;
        const {hours:h,minutes:m,seconds:s} = duration
        debugger
        this.props.action(Object.assign({},this.state,
            { duration: h.split("h")[0] + ":" + m.split("m")[0] + ":" + s.split("s")[0]}),
            this.props.activityId);
        // this.props.history.push(`/activities/${this.props.activityId}`)
    }
    render(){
        debugger
        return(
    <form className={`activity-edit-form`} onSubmit={this.handleSubmit}>
        <DurDist duration={this.state.duration} distance={this.state.distance} handleChange={this.handleChange}/>
        <div className="r2">
        {sport(this.handleChange("sport"), this.state.sport)}
        <label>Date
        <input
                type="date"
                className="filter-input session-input"
                value={this.state.date}
            onChange={this.handleChange("date")}
            />
            {/* <input
                type="time"
                className="filter-input session-input"
                value={this.state.date}
            onChange={this.handleChange("keywords")}
            /> */}
        </label>
        </div>
        <TitleDescr title={this.state.title} description={this.state.description} handleChange={this.handleChange}/>
        <input className={`session-submit link session-link`} type="submit" value={`Submit ${this.props.type}`} />
    </form>
    )}
}

export default ActivityForm;