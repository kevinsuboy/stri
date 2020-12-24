import React from 'react';
import Map from '../map/map'
import { calcTime, convertLocations } from '../../util/calc_util'
import DurDist from './durDist';
import TitleDescr from './titleDescr';
import _ from "lodash"

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
        this.handleCoordChange = this.handleCoordChange.bind(this)
        this.handleCoordAdd = this.handleCoordAdd.bind(this)
        this.handleCoordDel = this.handleCoordDel.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.locations){
            // debugger
            this.setState({
                locations: convertLocations(nextProps.locations)
            })
        }
    }
    handleCoordAdd(location) {
        const newLoc = this.state.locations;
        newLoc.push(location);
        this.setState({
            locations: newLoc
        })
    }
    handleCoordDel() {
        debugger
        this.setState({
            delta: "del"
        })
    }
    handleCoordChange(distance, locations, time) {
        // console.log("coord changed!")
        debugger
        this.setState({
            distance,
            locations,
            estimated_duration: { hours: Math.floor(time/3600)+"h ", minutes: Math.floor((time/60)%60)+"m ", seconds: time%60+"s " },
            delta: false
        })
    }
    componentDidUpdate(ownProps) {
        const routeChange = this.props.route && this.props.route[0] && this.props.route !== ownProps.route;
        if (routeChange) {
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
        // if(this.props.locations) debugger
        // if(this.state.locations) debugger
        debugger
        return (
            <div className={`activity-edit-form route-form`}>
                <div className="activity-edit-form-body">
                    <form className="activity-edit-form-content" onSubmit={this.handleSubmit}>
                        <DurDist duration={this.state.estimated_duration} distance={this.state.distance} handleChange={this.handleChange} />
                        <TitleDescr title={this.state.name} description={this.state.description} handleChange={this.handleChange} activity={false} />
                        <button className={`session-submit link session-link`} type="button" onClick={this.handleCoordDel}> Delete Last Location</button>
                        <input className={`session-submit link session-link`} type="submit" value={`Submit ${this.props.type}`} />
                        <RouteErrorContainer />
                    </form>
                    <Map
                        locations={this.state.locations}
                        delta={this.state.delta}
                        draggable={true}
                        handleCoordChange={this.handleCoordChange}
                        handleCoordAdd={this.handleCoordAdd}
                    />
                </div>
            </div>
        )
    }
}

export default RouteForm;