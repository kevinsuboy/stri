import React from 'react';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

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

class Map extends React.Component {
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
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
