import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

class HeaderStats extends React.Component {
    constructor(props) {
        super(props)
        this.normCnt = 4;
    }
    render() {
        const n_dated = [];
        for(const [k,v] of Object.entries(this.props.dated)){
            n_dated.push({
                date: k, count: Math.round((v.length/this.props.maxCnt) * this.normCnt),
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
                        console.log(`e: ${e}`)
                        console.log(e)
                        console.log(`v: ${v}`)
                        console.log(v)
                    }}
                    values={n_dated}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            </div>
        )
    }
}

export default HeaderStats;
