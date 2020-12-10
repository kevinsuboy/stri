import React from 'react';
import FilterForm from '../search/filter_form'
import ActivitiesTable from './activities_table'
import IndexNav from './index_nav'
import { Link } from 'react-router-dom';

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.cntPerPage = 10;
        this.handleClick = this.handleClick.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }
    componentWillUpdate(nextProps) {
        // debugger
        if (nextProps.match.params.pg !== this.props.match.params.pg){
            this.props.changeActivitiesFilter("offset", (nextProps.match.params.pg - 1) * this.cntPerPage);
            this.props.fetchFilteredUserActivities(this.props.userId);
        }
    }
    componentDidMount() {
        // debugger
        this.props.clearActivitiesFilter();
        this.props.changeActivitiesFilter("cnt",this.cntPerPage);
        this.props.changeActivitiesFilter("offset",(this.props.match.params.pg-1)*this.cntPerPage);
        this.props.fetchFilteredUserActivities(this.props.userId);
        // this.props.fetchUserActivities(this.props.userId);
    }
    handleClick(type) {
        // debugger
        return (e) => {
            switch (type) {
                case "next":
                    this.props.history.push(`/athlete/activities/${parseInt(this.props.match.params.pg) + 1}`);
                    // this.setState({ page: this.state.page + 1 })
                    break;
                case "prev":
                    this.props.history.push(`/athlete/activities/${parseInt(this.props.match.params.pg) - 1}`);
                    // this.setState({ page: this.state.page - 1 })
                    break;
                default:
                    break;
            }
        }
    }
    handlePage(num) {
        // debugger
        // this.setState({ page: num })
        this.props.history.replace(`/athlete/activities/${num}`);
        // this.props.history.push(`/athlete/activities/${num}`);
        // this.props.history.goBack();

    }
    componentWillUnmount() {
        this.props.clearActivitiesFilter();
    }
    render() {
        // debugger
        // const l = this.props.activities.length;
        // this.maxPage = Math.ceil(l === 0 ? 1:l / this.cntPerPage);
        this.maxPage = Math.ceil(this.props.activitiesCnt / this.cntPerPage);
        this.maxPage = this.maxPage === 0 ? 1:this.maxPage;
        return (
            <div id="global-index">
            <div className="index-container container">
                <h1>My Activities</h1>
                <Link to={`/athlete/activities/new`} className={`new-link link session-link`}>Create a New Activity</Link>
                <ul className="index-list">
                    <FilterForm sport={true}
                                userId={this.props.userId}
                                submitFilter={this.props.fetchFilteredUserActivities}
                                changeFilter={this.props.changeActivitiesFilter}
                                handlePage={this.handlePage}
                                page={this.props.match.params.pg}
                    />
                    <ActivitiesTable {...this.props}/>
                </ul>
                    <IndexNav   page={parseInt(this.props.match.params.pg)}
                                maxPage={this.maxPage}
                                handleClick={this.handleClick}
                                handlePage={this.handlePage}
                                urlHead={"/athlete/activities"}
                    />
            </div>
            </div>
        )
    }
}
export default Activities;