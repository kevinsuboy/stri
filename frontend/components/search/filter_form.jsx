import React from 'react';
import {sportBlock} from './filter_util'

class FilterForm extends React.Component {
    constructor(props){
        super(props)
        // debugger
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
            if (this.props.updateChosen && this.props.value.chosen) this.props.updateChosen(false);
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
            value={this.props.value ? (this.props.value.chosen ? this.props.value.title:null):null}
        />
        </div>
        {/* <input className={`nav-bar-login link session-link filter-submit`} type="submit" value="Search" /> */}
        {sport}
        </form>
    </div>
    )}
};

export default FilterForm;
