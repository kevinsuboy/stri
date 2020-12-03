import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="dashboard-sidebar container">
                {/* <h1>I am the Sidebar</h1> */}
                <ul className="sidebar-links">
                    <li className="nav-item splash-session sidebar-item session-link"><a href="https://github.com/kevinsuboy" target="_blank">
                        <i className="fab fa-github"></i><p>Checkout my Git</p>
                    </a></li>
                    <li className="nav-item splash-session sidebar-item session-link"><a href="https://angel.co/u/kevin-su" target="_blank">
                        <i className="fab fa-angellist"></i><p>Add me on Angelist</p>
                    </a></li>
                    <li className="nav-item splash-session sidebar-item session-link"><a href="https://www.linkedin.com/in/kevin-su-2700a859/" target="_blank">
                        <i className="fab fa-linkedin"></i><p>Add me on Linkedin</p>
                    </a></li>
                </ul>
            </div>
        )
    }
}
export default SideBar;