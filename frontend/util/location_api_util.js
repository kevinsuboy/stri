export const fetchRouteLocations = routeId => {
    return $.ajax({
        method: 'GET',
        url: `api/route/${routeId}/location`,
    })
};
export const fetchAllLocations = routeIds => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `api/location`,
        data: {routeIds}
    })
};
