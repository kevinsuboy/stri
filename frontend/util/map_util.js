/* global google:false */

class MapUtil {
    constructor(map, draggable=false, handleCoordChange=()=>{}) {
        this.map = map;
        this.handleCoordChange = handleCoordChange;
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
            const dir = this.directionsRenderer.getDirections();
            //
            const res = this.computeTotalDistance(dir);
            const loc = this.getLocations(dir);
            const time = this.getTime(dir);
            // debugger
            if(this.handleCoordChange) this.handleCoordChange(res,loc,time);
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
    getTime(result) {
        const myleg = result.routes[0].legs[0];
        return myleg.duration.value;
    }
    computeTotalDistance(result) {
        let total = 0;
        const myroute = result.routes[0];

        for (let i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        return total / 1000 / 1.609;
        // total = total / 1000 / 1.609;
        // return total + " mi";
        // document.getElementById("total").innerHTML = total + " mi";
    }
    placeMarkerAndPanTo(latLng) {
        new google.maps.Marker({
            position: latLng,
            map: this.map,
        });
        this.map.panTo(latLng);
    }
    calculateAndDisplayRoute(orDest, waypoints, travelMode = google.maps.TravelMode.WALKING) {
        if(orDest.origin && orDest.destination){
            let req = {
                origin: orDest.origin,
                waypoints,
                destination: orDest.destination,
                travelMode: travelMode,
                // travelMode: google.maps.TravelMode.WALKING,
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
