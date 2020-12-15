import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import ActivitiesTable from '../../index/activities_table'

class UserCal extends React.Component {
    constructor(props) {
        super(props)
        this.normCnt = 4;
        this.state = {
            dateFilter: "",
        }
        this.handleCalClick = this.handleCalClick.bind(this);
    }
    handleCalClick(v) {
        console.log('I am the cal click')
        console.log(v)
        this.setState({ dateFilter: v.date })
    }
    render() {
        const n_dated = [];
        for(const [k,v] of Object.entries(this.props.dated)){
            n_dated.push({
                date: k, count: Math.round((v.length/this.props.maxCnt) * this.normCnt),
                len: v.length,
                activities: v
            })
        }
        if(this.props.dated[this.state.dateFilter] === undefined) debugger;
        const dateActivities = (this.state.dateFilter && this.props.dated[this.state.dateFilter]) ? this.props.dated[this.state.dateFilter].map(id => this.props.allActivities[id]) : [];
        if(n_dated.length !== 0) debugger
        return (
            <div className="user-show-header-stats container">
                <CalendarHeatmap
                    startDate={new Date(new Date().getFullYear(), 0, 1)}
                    endDate={new Date()}
                    showWeekdayLabels={true}
                    // weekdayLabels={["M", "T", "W", "T", "F"]}
                    onMouseOver={(e, v) => {
                        // debugger
                        // console.log(`e: ${e}`)
                        // console.log(e)
                        // console.log(`v: ${v}`)
                        // console.log(v)
                    }}
                    tooltipDataAttrs={v => {
                        return {
                            'data-tip': (v && v.date) ? `${v.date}: ${v.len} activities` : "",
                        }
                    }}
                    values={n_dated}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                    onClick={this.handleCalClick}
                />
                <ReactTooltip />
                <ActivitiesTable deleteActivity={this.props.deleteActivity} activities={dateActivities} />
            </div>
        )
    }
}

export default UserCal;
