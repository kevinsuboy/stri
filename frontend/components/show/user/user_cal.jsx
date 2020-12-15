import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

class UserCal extends React.Component {
    constructor(props) {
        super(props)
        this.normCnt = 4;
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
        // debugger
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
                    // onClick={}
                />
                <ReactTooltip />
            </div>
        )
    }
}

export default UserCal;
