import React from 'react';
import {convertLocations} from '../../util/calc_util'
import _ from "lodash"

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});
const mapOptions = {
    center: {
        lat: 33.6861,
        lng: -117.8263
    }, // Irvine coords
    draggableCursor: "pointer",
   // center: {
    //     lat: 37.773972,
    //     lng: -122.431297
    // }, // San Francisco coords
    zoom: 13
};
import MapUtil from '../../util/map_util'

class Map extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orDest: {
                origin: undefined,
                destination: undefined
            },
            waypoints: undefined,
            init: true
        }
        this.init = true;
    }
    componentWillUpdate(nextProps) {
        const baseCond = this.props !== nextProps;
        const baseCondA = this.props.locations !== nextProps.locations;
        // const condA = this.props.locations && (this.props.locations.length !== nextProps.locations.length);
        this.delta = nextProps.delta;
        if(baseCond && (baseCondA && (this.state.init) || nextProps.delta)){
            // if(baseCond && (this.state.init || condA)){
            let coord = undefined;
            if (!Array.isArray(nextProps.locations)) coord = convertLocations(nextProps.locations);
            else coord = _.cloneDeep(nextProps.locations);
            if(nextProps.delta === "del") coord.pop();
            // debugger
            this.setState({
                init: false,
                orDest: {
                    origin: coord[0],
                    destination: coord[coord.length - 1]
                },
                waypoints: coord.slice(1,coord.length - 1).map(el => ({
                    location: el,
                    stopover: true
                }))
            })
        }
    }
    componentDidMount() {
        mapOptions.draggableCursor = this.props.newForm ? "pointer" : "grab";
        // debugger
        this.registerListeners();
    }
    registerListeners() {
        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     const coords = getCoordsObj(event.latLng);
        //     debugger
        // });
    }
    render() {
        // debugger
        const init = this.init && !this.state.init;
        const {routeLoading} = this.props;
        const condA = routeLoading[0] && parseInt(routeLoading[0][0]) === this.props.routeId;
        if (
            (init || this.delta) &&
            condA
        ){ 
            this.init = false;
            this.delta = false;
            // debugger
            const map = this.refs.map;
            this.map = new google.maps.Map(map, mapOptions);
            this.maputil = new MapUtil(this.map, this.props.draggable, this.props.handleCoordChange);

            this.maputil.calculateAndDisplayRoute(this.state.orDest, this.state.waypoints, this.props.travelMode);
            setTimeout(() => {
                this.props.deleteRoutesLoading(this.props.routeId);
            }, 700);
        }
        return (
            <div className="map" ref="map">
                Map
            </div>
        );
    }
}

export default Map;
