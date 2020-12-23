import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocation = location => ({
    type: RECEIVE_LOCATION,
    location
})
export const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
})
export const fetchRouteLocations = (userId) => dispatch => (
    APIUtil.fetchRouteLocations(userId).then(locations => (
        dispatch(receiveLocation(locations))
    ))
);
export const fetchAllLocations = (routeIds) => dispatch => (
    APIUtil.fetchAllLocations(routeIds).then(locations => (
        dispatch(receiveLocations(locations))
    ))
);


