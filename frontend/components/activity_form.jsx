import React from 'react';
import { calcTime } from '../util/calc_util'

const sport =
<div className="sport-input">
    <label>Sport</label>
    <select className="filter-select session-input" name="sport"
    // onChange={handleChange("sport")}
    >
        <option value="" defaultValue>All Sport Types</option>
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


class ActivityForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            distance: "",
            duration: "",
            title: "",
            description: "",
            date: "",
        }
    }
    componentDidMount(){
        this.props.fetchActivity(this.props.activityId);
    }
    componentDidUpdate(ownProps){
        // debugger
        if(this.props.activity[0] && this.props.activity !== ownProps.activity){
            const res = calcTime(this.props.activity[0]);
            this.setState({
                duration: res.dur,
                distance: this.props.activity[0].distance,
                title: this.props.activity[0].title,
                description: this.props.activity[0].description,
                date: this.props.activity[0].date,
            })
        }
    }
    render(){
        debugger
        let {hours:h ,minutes:m,seconds:s} = this.state.duration;
        h = h ? h : "";
        m = m ? m : "";
        s = s ? s : "";
        return(
    <form className={`activity-edit-form`}>
        <div className="r1">
        <label>Distance
        {/* <div className="dist-input"> */}
        <input
            type="text"
            className="filter-input session-input"
            value={this.state.distance}
            // onChange={handleChange("keywords")}
        />
        {/* </div> */}
        </label>
        <div className="dur-group">
        <label>Duration
        <div className="dur-input-group">
        <div className="dur-input">
        <input
            type="text"
            className="filter-input session-input"
            value={parseInt(parseInt(h.split("h")[0]))}
            // onChange={handleChange("keywords")}
            />
        </div>h
        <div className="dur-input">
        <input
            type="text"
            className="filter-input session-input"
            value={parseInt(parseInt(m.split("m")[0]))}
            // onChange={handleChange("keywords")}
        />
        </div>m
        <div className="dur-input">
        <input
            type="text"
            className="filter-input session-input"
            value={parseInt(parseInt(s.split("s")[0]))}
            // onChange={handleChange("keywords")}
        />
        </div>s
        </div>
        </label>
        </div>
        </div>
        <div className="r2">
        {sport}
        <label>Date
        <input
                type="date"
                className="filter-input session-input"
                value={this.state.date}
            // onChange={handleChange("keywords")}
            />
            <input
                type="time"
                className="filter-input session-input"
                value={this.state.date}
            // onChange={handleChange("keywords")}
            />
        </label>
        </div>

        <label>Title</label>
        <input
            type="text"
            className="filter-input session-input"
            value={this.state.title}
            // onChange={handleChange("keywords")}
        />
        <label>Description</label>
        <textarea
            className="filter-input session-input descr-input"
            value={this.state.description}
            // onChange={handleChange("keywords")}
        />
        <input className={`session-submit link session-link`} type="submit" value={`Submit Change`} />
    </form>
    )}
}

export default ActivityForm;