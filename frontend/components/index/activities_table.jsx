import React from 'react';
import ActivitiesItem from './activities_item'
import { calcTime } from '../../util/calc_util'

class ActivitiesTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sport: true,
            date: true,
            title: true,
            duration: true,
            pace: true,
            distance: true,
        }
        this.sortField = "date"; this.sorted = [];
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(field){
        return e => {
            // debugger
            const asc = !this.state[field]
            this.setState({
                [field]: asc
            })
        }
    }
    componentWillUpdate(prevProps,prevState){
        for (const [key, value] of Object.entries(prevState)) {
            if(this.state[key] !== value){
                this.sortField = key;
            }
        }
    }
    render() {
        const aVal = this.state[this.sortField] ? 1 : -1;
        const bVal = -1*aVal;
        if(this.sortField !== "pace"){
            this.props.activities.sort((a, b) => (a[this.sortField] < b[this.sortField]) ? aVal : bVal)
        }else{
            debugger
            this.props.activities.sort((a, b) => {
                const { paceTime: pT_a } = calcTime(a);
                const { paceTime: pT_b } = calcTime(b);
                debugger
                return pT_a < pT_b ? aVal : bVal;
            })
        }
        const selected = [
            this.sortField === "sport" ? "index-header-selected" : null,
            this.sortField === "date" ? "index-header-selected" : null,
            this.sortField === "title" ? "index-header-selected" : null,
            this.sortField === "duration" ? "index-header-selected" : null,
            this.sortField === "pace" ? "index-header-selected" : null,
            this.sortField === "distance" ? "index-header-selected" : null,
        ]
        const arrow = {}
        for (const [k, v] of Object.entries(this.state)){
            arrow[k] = v ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>
        }
        const activityItems = this.props.activities.map(el => <ActivitiesItem key={el.id} activity={el} />);
        // debugger
        return (
            <div className="table-container">
                <h2>Activities Table</h2>
                <ul className="index-table-header index-item">
                    <li className={`table-col index-item-1 ${selected[0]}`} onClick={this.handleClick("sport")}>Sport{arrow["sport"]}</li>
                    <li className={`table-col index-item-2 ${selected[1]}`} onClick={this.handleClick("date")}>Date{arrow["date"]}</li>
                    <li className={`table-col index-item-3 ${selected[2]}`} onClick={this.handleClick("title")}>Title{arrow["title"]}</li>
                    <li className={`table-col index-item-4 ${selected[3]}`} onClick={this.handleClick("duration")}>Time{arrow["duration"]}</li>
                    <li className={`table-col index-item-5 ${selected[4]}`} onClick={this.handleClick("pace")}>Pace{arrow["pace"]}</li>
                    <li className={`table-col index-item-6 ${selected[5]}`} onClick={this.handleClick("distance")}>Distance{arrow["distance"]}</li>
                    <li className="index-item-edit"></li>
                    <li className="index-item-delete"></li>
                </ul>
                {activityItems}
            </div>
        )
    }
}
export default ActivitiesTable;