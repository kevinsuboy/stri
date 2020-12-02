import React from 'react';
import { calcTime } from '../util/calc_util'
import { Redirect } from 'react-router-dom';


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
    componentDidMount() {
        this.props.fetchRoute(this.props.routeId);
    }
    componentDidUpdate(ownProps) {
        // debugger
        if (this.props.route[0] && this.props.route !== ownProps.route) {
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
                <div className="r1">
                    <label>Distance
        {/* <div className="dist-input"> */}
                        <input
                            type="text"
                            className="filter-input session-input"
                            value={this.state.distance}
                            onChange={this.handleChange("distance")}
                        /><p>mi</p>
                        {/* </div> */}
                    </label>
                    <div className="dur-group">
                        <label>Estimated Duration
        <div className="dur-input-group">
                                <div className="dur-input">
                                    <input
                                        type="text"
                                        className="filter-input session-input"
                                        value={parseInt(parseInt(h.split("h")[0]))}
                                        onChange={this.handleChange("hours")}
                                    />
                                </div>h
        <div className="dur-input">
                                    <input
                                        type="text"
                                        className="filter-input session-input"
                                        value={parseInt(parseInt(m.split("m")[0]))}
                                        onChange={this.handleChange("minutes")}
                                    />
                                </div>m
        <div className="dur-input">
                                    <input
                                        type="text"
                                        className="filter-input session-input"
                                        value={parseInt(parseInt(s.split("s")[0]))}
                                        onChange={this.handleChange("seconds")}
                                    />
                                </div>s
        </div>
                        </label>
                    </div>
                </div>
                <div className="r2">
                </div>

                <label>Title</label>
                <input
                    type="text"
                    className="filter-input session-input"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                />
                <label>Description</label>
                <textarea
                    className="filter-input session-input descr-input"
                    value={this.state.description}
                    onChange={this.handleChange("description")}
                />
                <input className={`session-submit link session-link`} type="submit" value={`Submit Change`} />
            </form>
        )
    }
}

export default RouteForm;