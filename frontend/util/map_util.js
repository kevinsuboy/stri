/* global google:false */

class MapUtil {
    constructor(map, draggable=false, handleCoordChange=()=>{}, orDest, waypoints) {
        this.map = map;
        this.handleCoordChange = handleCoordChange;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({draggable});
        window.directionsRenderer = this.directionsRenderer;
    
        this.directionsRenderer.setMap(map);
        
        this.initListeners();
        // debugger
        if(orDest && waypoints) this.markers = [orDest.origin, ...waypoints.map(el=>el.location), orDest.destination];
        else this.markers = [];
    }
    initListeners(){
        this.dropMarkerListener();
        this.directionsChanged();
    }

    dropMarkerListener(){
        this.map.addListener("click", (e) => {
            if(!this.markers.push){
                console.log(this.markers)
                debugger
            }
            this.manual = null;
            this.markers.push({lat: e.latLng.lat(), lng: e.latLng.lng()})
            console.log(this.markers)
            if(this.markers.length > 1){
                this.calculateAndDisplayRoute(
                    {
                        origin: this.markers[0],
                        destination: this.markers[this.markers.length-1]
                    },
                    this.markers.slice(1, this.markers.length - 1).map(el => ({
                        location: el,
                        stopover: true
                    })),
                    google.maps.TravelMode.WALKING
                )
                this.clearOrig();
            }else{
                this.placeMarkerAndPanTo(e.latLng);
            }
            // this.calculateAndDisplayRoute({origin: this.markers[0], destination: this.markers[0]}, [], google.maps.TravelMode.WALKING)
            console.log("marker dropped")
        });
    }
    placeMarkerAndPanTo(latLng) {
        // debugger
        this.orig = new google.maps.Marker({
            position: latLng,
            map: this.map,
            draggable: true
        });
        this.orig.addListener("dragend", (e) => {
            // console.log(this.markers)
            // console.log("DRAGEND")
            // debugger
            this.markers = [{ lat: e.latLng.lat(), lng: e.latLng.lng()}]
            // const tmp = { lat: this.orig.position.lat(), lng: this.orig.position.lng()}
            // console.log(tmp)
            // console.log(this.markers)
        })
        this.map.panTo(latLng);
    }
    manDirectionsChanged(type){
        debugger
        this.manual = type;
    }
    clearOrig(){
        debugger
        if (this.orig) {
            this.orig.setMap(null);
            this.orig = null;
        }
    }
    directionsChanged(){
        this.directionsRenderer.addListener("directions_changed", () => {
            const dir = this.directionsRenderer.getDirections();
            //
            const res = this.computeTotalDistance(dir);
            const loc = this.getLocations(dir);
            const time = this.getTime(dir);
            if(!loc) debugger
            debugger
            console.log("manual:")
            console.log(this.manual)
            this.markers = loc;
            if(this.handleCoordChange){
                if(!this.manual) this.handleCoordChange(res,loc,time);
                else if(this.manual === "none"){
                    debugger
                    this.markers = [];
                    this.handleCoordChange(0,[],0);
                }
                else if(this.manual === "single"){
                    debugger
                    this.markers = [loc[0]];
                    this.handleCoordChange(0,[loc[0]],0);
                }
            }
        });
    }
    getLocations(result) {
        const coord = [];
        const mylegs = result.routes[0].legs;
        mylegs.forEach(leg => {
            coord.push({ lat: leg.start_location.lat(), lng: leg.start_location.lng()})
        })
        const dest = mylegs[mylegs.length - 1];
        coord.push({ lat: dest.end_location.lat(), lng: dest.end_location.lng()})
        return coord;
    }
    getTime(result) {
        let total = 0;
        const myroute = result.routes[0];
        for (let i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].duration.value;
        }
        return total;
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
    clearRoute(){
        // console.log(this.directionsRenderer)
        this.directionsRenderer.setMap(null)
    }
    calculateAndDisplayRoute(orDest, waypoints, travelMode = google.maps.TravelMode.WALKING) {
        if(!this.directionsRenderer.map) this.directionsRenderer.setMap(this.map);
        if(orDest.origin && orDest.destination){
            let req = {
                origin: orDest.origin,
                waypoints,
                optimizeWaypoints: true,
                destination: orDest.destination,
                travelMode: travelMode,
                // travelMode: google.maps.TravelMode.DRIVING,
            };
            this.directionsService.route(req,
                (response, status) => {
                    if (status === "OK") {
                        // debugger
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
