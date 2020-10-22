import React from 'react';
import ActivitiesItem from './activities_item'

class ActivitiesTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        debugger
        const activityItems = this.props.activities.map(el => <ActivitiesItem key={el.id} activity={el} />);
        return (
            <div className="table-container">
                <h2>Activities Table</h2>
                <ul className="index-table-header index-item">
                    <li className="table-col index-item-1">Sport<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-2">Date<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-3">Title<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-4">Time<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-5">Pace<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-6">Duration<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-edit"></li>
                    <li className="table-col index-item-delete"></li>
                </ul>
                {activityItems}
            </div>
        )
    }
}
export default ActivitiesTable;