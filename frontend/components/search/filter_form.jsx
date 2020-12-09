import React from 'react';
const sportBlock = (handleChange) => <div className="filter-group filter-sport">
    <label>Sport</label>
    <select className="filter-select session-input" name="sport"
        onChange={handleChange("sport")}
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
class FilterForm extends React.Component {
    constructor(props){
        super(props)
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        if(this.props.clearData) this.props.clearData();
        this.state = {
            keyword: ""
        }
    }
    debounce(fn, wait) {
        let timeout;

        return (...args) => {
            const later = () => {
                clearTimeout(timeout);
                fn(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.submitFilter(this.props.userId)
    };
    handleChange(filter) {
        // const db = this.debounce(this.props.submitFilter, 1000)
        const db = this.debounce((filter,value)=>{
            this.props.handlePage(1)
            this.props.changeFilter(filter,value);
            if(!this.props.title || value !== ""){
                this.props.submitFilter(this.props.userId);
            }
        }, 1000)
        return e => {
            // this.props.changeFilter(filter,e.currentTarget.value)
            if(this.props.title && e.currentTarget.value === "") this.props.clearData();
            // db(this.props.userId);
            // this.setState({keyword: e.currentTarget.value})
            db(filter, e.currentTarget.value);
            if(filter==="sport"){
                this.handleSubmit(e);
            }
        };
    }
    componentWillUpdate(nextProps){
        const {page: np} = nextProps;
        const {page} = this.props;
        if(page !== np && np !== 1) this.setState({keyword: ""})
    }
    render(){
        // debugger
    let sport = undefined;
    if(this.props.sport){
        sport = sportBlock(this.handleChange);

    }
    return(
    <div className="filter-container">
    <form className="filter-form" onSubmit={this.handleSubmit}>
        <div className="filter-group filter-keyword">
        <label>{this.props.title ? this.props.title:"Keyword"}</label>
        <input
            type="text"
            className="filter-input session-input"
            placeholder={this.props.default ? this.props.default : "My Morning Workout"}
            onChange={this.handleChange("keywords")}
            // value={this.state.keyword}
        />
        </div>
        {/* <input className={`nav-bar-login link session-link filter-submit`} type="submit" value="Search" /> */}
        {sport}
        </form>
    </div>
    )}
};

export default FilterForm;
