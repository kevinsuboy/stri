import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
})
export const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})

export const fetchUserRoute = (userId, id) => dispatch => (
    APIUtil.fetchUserRoute(userId, id).then(route => (
        dispatch(receiveRoute(route))
    ))
);
