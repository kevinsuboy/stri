import React from 'react';
import FilterForm from '../search/filter_form'
import RoutesTable from './routes_table'
import IndexNav from './index_nav'
import { Link } from 'react-router-dom';

class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.cntPerPage = 10;
        this.handleClick = this.handleClick.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }
    componentDidMount() {
        this.props.clearRoutesFilter();
        this.props.changeRoutesFilter("cnt", this.cntPerPage);
        this.props.changeRoutesFilter("offset", (this.props.match.params.pg - 1) * this.cntPerPage);
        this.props.fetchFilteredUserRoutes(this.props.userId);
    }
    componentWillUpdate(nextProps) {
        // debugger
        if (nextProps.match.params.pg !== this.props.match.params.pg) {
            this.props.changeRoutesFilter("offset", (nextProps.match.params.pg - 1) * this.cntPerPage);
            this.props.fetchFilteredUserRoutes(this.props.userId);
        }
    }
    componentWillUnmount() {
        this.props.clearRoutesFilter();
    }
    handleClick(type) {
        // debugger
        return (e) => {
            switch (type) {
                case "next":
                    this.props.history.push(`/athlete/routes/${parseInt(this.props.match.params.pg) + 1}`);
                    // this.setState({ page: this.state.page + 1 })
                    break;
                case "prev":
                    this.props.history.push(`/athlete/routes/${parseInt(this.props.match.params.pg) - 1}`);
                    // this.setState({ page: this.state.page - 1 })
                    break;
                default:
                    break;
            }
        }
    }
    handlePage(num) {
        // this.setState({ page: num })
        this.props.history.push(`/athlete/routes/${1}`);
    }
    render() {
        debugger
        this.maxPage = Math.ceil(this.props.routesCnt / this.cntPerPage);
        return (
            <div id="global-index">
                <div className="index-container container">
                    <h1>My Routes</h1>
                    <Link to={`routes/new`} className={`new-link link session-link`}>Create a New Route</Link>
                    <ul className="index-list">
                        <FilterForm userId={this.props.userId}
                                    submitFilter={this.props.fetchFilteredUserRoutes}
                                    changeFilter={this.props.changeRoutesFilter}
                                    handlePage={this.handlePage}
                        />
                        <RoutesTable {...this.props} />
                    </ul>
                    <IndexNav page={parseInt(this.props.match.params.pg)}
                        maxPage={this.maxPage}
                        handleClick={this.handleClick}
                        handlePage={this.handlePage}
                        urlHead={"/athlete/routes"}
                    />
                </div>
            </div>
        )
    }
}
export default Routes;