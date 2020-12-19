export const fetchRouteLocations = routeId => {
    return $.ajax({
        method: 'GET',
        url: `api/route/${routeId}/location`,
    })
};
