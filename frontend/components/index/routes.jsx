import React from 'react';
import FilterForm from '../search/filter_form'
import RoutesTable from './routes_table'

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUserRoutes(this.props.userId);
    }
    componentWillUpdate() {
        this.props.clearRoutesFilter();
    }
    render() {
        // debugger
        return (
            <div id="global-index">
                <div className="index-container container">
                    <h1>My Routes</h1>
                    <ul className="index-list">
                        <FilterForm userId={this.props.userId} submitFilter={this.props.fetchFilteredUserRoutes} changeFilter={this.props.changeRoutesFilter} />
                        <RoutesTable {...this.props} />
                    </ul>
                </div>
            </div>
        )
    }
}
export default Routes;