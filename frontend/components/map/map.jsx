import React from 'react';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});
import MapUtil from '../../util/map_util'

const mapOptions = {
    center: {
        lat: 33.6861,
        lng: -117.8263
    }, // Irvine coords
    // center: {
    //     lat: 37.773972,
    //     lng: -122.431297
    // }, // San Francisco coords
    zoom: 13
};

//! Testing coords
const orDest =
{
    origin: { // Civic Center
        lat: 33.6861,
        lng: -117.8263
    },
    destination: { // Heritage Park
        lat: 33.7002,
        lng: -117.7797
    }
}
const waypoints =
[
    {
        location: { // In n Out
            lat: 33.69516851340369, 
            lng: -117.82704364411289
        },
        stopover: false
    },
]

class Map extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.maputil = new MapUtil(this.map);
        this.maputil.calculateAndDisplayRoute(orDest, waypoints);
    }

    render() {
        return (
            <div className="map" ref="map">
                Map
            </div>
        );
    }
}

export default Map;
