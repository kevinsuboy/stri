/* global google:false */

class MapUtil {
    constructor(map, draggable=false) {
        this.map = map;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({draggable});
        window.directionsRenderer = this.directionsRenderer;
    
        this.directionsRenderer.setMap(map);
        
        this.initListeners();
    }
    initListeners(){
        this.dropMarkerListener();
        this.directionsChanged();
    }

    dropMarkerListener(){
        this.map.addListener("click", (e) => {
            this.placeMarkerAndPanTo(e.latLng);
        });
    }
    directionsChanged(){
        this.directionsRenderer.addListener("directions_changed", (e) => {
            const res = this.computeTotalDistance(this.directionsRenderer.getDirections());
            const loc = this.getLocations(this.directionsRenderer.getDirections());
            // debugger
        });
    }
    getLocations(result) {
        const coord = [];
        const myleg = result.routes[0].legs[0];
        coord.push({ lat: myleg.start_location.lat(), lng: myleg.start_location.lng()})
        myleg.via_waypoints.forEach(el => 
            coord.push({ lat: el.lat(), lng: el.lng() })
        )
        coord.push({ lat: myleg.end_location.lat(), lng: myleg.end_location.lng() })
        return coord;
    }
    computeTotalDistance(result) {
        let total = 0;
        const myroute = result.routes[0];

        for (let i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000 / 1.609;
        return total + " mi";
        // document.getElementById("total").innerHTML = total + " mi";
    }
    placeMarkerAndPanTo(latLng) {
        new google.maps.Marker({
            position: latLng,
            map: this.map,
        });
        this.map.panTo(latLng);
    }
    calculateAndDisplayRoute(orDest, waypoints, travelMode) {
        if(orDest.origin && orDest.destination){
            let req = {
                origin: orDest.origin,
                waypoints,
                destination: orDest.destination,
                travelMode: google.maps.TravelMode.WALKING,
            };
            // debugger
            this.directionsService.route(req,
                (response, status) => {
                    if (status === "OK") {
                        this.directionsRenderer.setDirections(response);
                    } else {
                        window.alert("Directions request failed due to " + status);
                    }
                }
            );
        }
    }

}
export default MapUtil;
