import React from 'react';
import FilterForm from '../search/filter_form';
import RoutesTable from '../index/routes_table';

class ActivityFormRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: false
        }
        // debugger
        this.updateChosen = this.updateChosen.bind(this)
    }
    updateChosen(val, title) {
        // debugger
        this.setState({
            chosen: val,
            title
        })
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
                    updateChosen={this.updateChosen}
                    value={this.state}
        />
        <RoutesTable    {...this.props}
                        options={{
                            date: false,
                            time: false,
                            pace: false,
                            ed: false
                        }}
                        selectRoute={this.props.selectRoute}
                        updateChosen={this.updateChosen}
        />
            </div>
        )
    }
}

export default ActivityFormRoute