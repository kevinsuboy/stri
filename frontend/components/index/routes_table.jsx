import React from 'react';
import RoutesItem from './routes_item'
import { calcTime } from '../../util/calc_util'

class RoutesTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: true,
            estimated_duration: true,
            pace: true,
            distance: true,
        }
        this.sortField = ""; this.sorted = [];
    }
    handleClick(field) {
        return e => {
            // debugger
            const asc = !this.state[field]
            this.setState({
                [field]: asc
            })
        }
    }
    componentWillUpdate(prevProps, prevState) {
        for (const [key, value] of Object.entries(prevState)) {
            if (this.state[key] !== value) {
                this.sortField = key;
            }
        }
        const aVal = this.state[this.sortField] ? 1 : -1;
        const bVal = -1 * aVal;
        if (this.sortField !== "pace") {
            this.props.routes.sort((a, b) => (a[this.sortField] < b[this.sortField]) ? aVal : bVal)
        } else {
            // debugger
            this.props.routes.sort((a, b) => {
                const { paceTime: pT_a } = calcTime(a);
                const { paceTime: pT_b } = calcTime(b);
                // debugger
                return pT_a < pT_b ? aVal : bVal;
            })
        }
    }
    render() {
        // debugger
        const selected = [
            this.sortField === "name" ? "index-header-selected" : null,
            this.sortField === "duration" ? "index-header-selected" : null,
            this.sortField === "pace" ? "index-header-selected" : null,
            this.sortField === "distance" ? "index-header-selected" : null,
        ]
        const arrow = {}
        for (const [k, v] of Object.entries(this.state)) {
            arrow[k] = v ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>
        }
        const routeItems = this.props.routes.map(el => <RoutesItem key={el.id} route={el} deleteRoute={this.props.deleteRoute}/>);
        return (
            <div className="table-container">
                <h2>Routes Table</h2>
                <ul className="index-table-header index-item">
                    {/* <li className="table-col index-item-1">Sport<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-2">Date<i className="fas fa-angle-down"></i></li> */}
                    <li className={`table-col index-item-3 ${selected[0]}`} onClick={this.handleClick("name")}>Title{arrow["name"]}</li>
                    <li className={`table-col index-item-4 ${selected[1]}`} onClick={this.handleClick("estimated_duration")}>Est. Time{arrow["duration"]}</li>
                    <li className={`table-col index-item-5 ${selected[2]}`} onClick={this.handleClick("pace")}>Est. Pace{arrow["pace"]}</li>
                    <li className={`table-col index-item-6 ${selected[3]}`} onClick={this.handleClick("distance")}>Distance{arrow["distance"]}</li>
                    <li className="table-col index-item-edit"></li>
                    <li className="table-col index-item-delete"></li>
                </ul>
                {routeItems}
            </div>
        )
    }
}
export default RoutesTable;