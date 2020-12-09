import React from 'react';
import FilterForm from '../search/filter_form';
import RoutesTable from '../index/routes_table';

class ActivityFormRoute extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }
    render() {
        return(
            <div className="activity-form-route">
        <FilterForm userId={this.props.userId}
                    submitFilter={this.props.fetchFilteredUserRoutes}
                    changeFilter={this.props.changeRoutesFilter}
                    handlePage={() => {}}
                    clearData={this.props.clearRoutes}
                    title={`Route`}
                    default={`Optional`}
        />
        <RoutesTable {...this.props} />
            </div>
        )
    }
}

export default ActivityFormRoute