import React from 'react';
import { calcTime } from '../../util/calc_util'
import { Redirect } from 'react-router-dom';
import DurDist from './durDist';
import TitleDescr from './titleDescr';
import Map from '../map/map'

import RouteErrorContainer from './route_form_error_container'

class RouteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            distance: "",
            estimated_duration: { hours: "0h ", minutes: "0m ", seconds: "1s " },
            name: "",
            description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidUpdate(ownProps) {
        // debugger
        if (this.props.route && this.props.route[0] && this.props.route !== ownProps.route) {
            const res = calcTime(this.props.route[0]);
            this.setState({
                estimated_duration: res.dur,
                distance: this.props.route[0].distance,
                name: this.props.route[0].name,
                description: this.props.route[0].description,
            })
        }
    }
    handleChange(field) {
        // debugger
        if (field !== "hours" && field !== "minutes" && field !== "seconds") {
            return e => this.setState({
                [field]: e.currentTarget.value
            });
        } else {
            return e => this.setState({
                estimated_duration: Object.assign({}, this.state.estimated_duration,
                    { [field]: e.currentTarget.value })
            });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const { estimated_duration } = this.state;
        const { hours: h, minutes: m, seconds: s } = estimated_duration
        this.props.action(Object.assign({}, this.state, { userId: this.props.userId },
            { estimated_duration: h.split("h")[0] + ":" + m.split("m")[0] + ":" + s.split("s")[0] }),
            this.props.routeId).then((data) => {
                if (this.props.newForm)
                    this.props.updateUser().then(() => 
                        this.props.history.push(`/routes/${data.route.id}`)
                        );
                else
                    this.props.history.push(`/routes/${data.route.id}`)
            })
    }
    render() {
        let { hours: h, minutes: m, seconds: s } = this.state.estimated_duration;
        h = h ? h : "0";
        m = m ? m : "0";
        s = s ? s : "0";
        // debugger
        return (
            <form className={`activity-edit-form route-form`} onSubmit={this.handleSubmit}>
                <div className="activity-edit-form-body">
                    <div className="activity-edit-form-content">
                        <DurDist duration={this.state.estimated_duration} distance={this.state.distance} handleChange={this.handleChange} />
                        <TitleDescr title={this.state.name} description={this.state.description} handleChange={this.handleChange} activity={false}/>
                        <input className={`session-submit link session-link`} type="submit" value={`Submit ${this.props.type}`} />
                    </div>
                    <Map locations={this.props.locations} draggable={true}/>
                </div>
                <RouteErrorContainer />
            </form>
        )
    }
}

export default RouteForm;