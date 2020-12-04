import React from 'react';
import { calcTime } from '../util/calc_util'
import { Redirect } from 'react-router-dom';
import DurDist from './durDist';
import TitleDescr from './titleDescr';

class RouteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            distance: "",
            estimated_duration: "",
            name: "",
            description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
        this.props.action(Object.assign({}, this.state,
            { estimated_duration: h.split("h")[0] + ":" + m.split("m")[0] + ":" + s.split("s")[0] }),
            this.props.routeId);
        this.props.history.push(`/routes/${this.props.routeId}`)
    }
    render() {
        let { hours: h, minutes: m, seconds: s } = this.state.estimated_duration;
        h = h ? h : "0";
        m = m ? m : "0";
        s = s ? s : "0";
        debugger
        return (
            <form className={`activity-edit-form`} onSubmit={this.handleSubmit}>
                <DurDist duration={this.state.estimated_duration} distance={this.state.distance} handleChange={this.handleChange} />
                <TitleDescr title={this.state.title} description={this.state.description} handleChange={this.handleChange} />
                <input className={`session-submit link session-link`} type="submit" value={`Submit Change`} />
            </form>
        )
    }
}

export default RouteForm;