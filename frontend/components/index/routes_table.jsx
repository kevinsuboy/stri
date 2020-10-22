import React from 'react';
import RoutesItem from './routes_item'

class RoutesTable extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(field){
        
    }
    render() {
        // debugger
        const routeItems = this.props.routes.map(el => <RoutesItem key={el.id} route={el} />);
        return (
            <div className="table-container">
                <h2>Activities Table</h2>
                <ul className="index-table-header index-item">
                    {/* <li className="table-col index-item-1">Sport<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-2">Date<i className="fas fa-angle-down"></i></li> */}
                    <li className="table-col index-item-3">Title<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-4">Time<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-5">Est. Pace<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-6">Est. Distance<i className="fas fa-angle-down"></i></li>
                    <li className="table-col index-item-edit"></li>
                    <li className="table-col index-item-delete"></li>
                </ul>
                {routeItems}
            </div>
        )
    }
}
export default RoutesTable;