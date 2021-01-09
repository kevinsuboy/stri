import React from 'react';
import FilterForm from '../search/filter_form';
import RoutesTable from '../index/routes_table';
import ActivityRouteItem from './activity_route_item_container';

class ActivityFormRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: false
        }
        // debugger
        this.updateChosen = this.updateChosen.bind(this)
        this.firstMount = true;
    }
    updateChosen(val, title, routeId) {
        // debugger
        this.setState({
            chosen: val,
            title,
            routeId
        })
    }
    componentDidUpdate(ownProps) {
        if(this.firstMount && this.props.activity && this.props.activity[0]){
            const r = this.props.route(this.props.activity[0].route_id);
            const oR = ownProps.route(this.props.activity[0].route_id);
            // debugger
            if (r && r[0] && r[0] !== oR[0]) {
                this.updateChosen(true,r[0].name,r[0].id)
                this.firstMount = false;
            }
        }

    }
    render() {
        // if(this.state.chosen) debugger
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
        {!this.state.chosen ? <RoutesTable    {...this.props}
                        options={{
                            date: false,
                            time: false,
                            pace: false,
                            ed: false
                        }}
                        selectRoute={this.props.selectRoute}
                        updateChosen={this.updateChosen}
                // /> : null
                /> : <ActivityRouteItem routeId={this.state.routeId}/>
        }
            </div>
        )
    }
}

export default ActivityFormRoute