/* global google:false */

class MapUtil {
    constructor(map) {
        this.map = map;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
    
        this.directionsRenderer.setMap(map);
        
        this.initListeners();
    }
    initListeners(){
        this.dropMarkerListener();
    }

    dropMarkerListener(){
        this.map.addListener("click", (e) => {
            this.placeMarkerAndPanTo(e.latLng);
        });
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
            debugger
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
