import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations
})
export const fetchRouteLocations = (userId) => dispatch => (
    APIUtil.fetchRouteLocations(userId).then(locations => (
        dispatch(receiveLocations(locations))
    ))
);


