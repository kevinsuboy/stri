import React from 'react';
import FilterForm from '../search/filter_form';

class ActivityFormRoute extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }
    render() {
        return(
        <FilterForm userId={this.props.userId}
                    submitFilter={this.props.fetchFilteredUserRoutes}
                    changeFilter={this.props.changeRoutesFilter}
                    handlePage={() => {}}
                    title={`Route`}
        />
        )
    }
}

export default ActivityFormRoute