import React from 'react';


class FilterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recentDays: null,
            keywords: '',
            sport: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.submitFilter(this.state, parseInt(e.currentTarget.value))
    };
    handleChange(filter) {
        return e => {
            // debugger
            return this.setState({
            [filter]: e.currentTarget.value
        })};
    }
    render(){
    return(
    <div className="filter-container">
    <form className="filter-form" onSubmit={this.handleSubmit}>
        <div className="filter-group filter-keyword">
        <label>Keywords</label>
        <input
            type="text"
            className="filter-input session-input"
            placeholder="My Morning Workout"
            onChange={this.handleChange("keywords")}
        />
        </div>
        <input className={`nav-bar-login link session-link filter-submit`} type="submit" value="Search" />
        <div className="filter-group filter-sport">
        <label>Sport</label>
        <select className="filter-select session-input" name="sport"
            onChange={this.handleChange("sport")}
        >
            <option value="All" defaultValue>All Sport Types</option>
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
        </form>
    </div>
    )}
};

export default FilterForm;
