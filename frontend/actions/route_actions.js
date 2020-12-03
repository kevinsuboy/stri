import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
})
export const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})
export const removeRoute = (routeId) => ({
    type: DELETE_ROUTE,
    routeId
})


export const fetchRoute = (id) => dispatch => (
    APIUtil.fetchRoute(id).then(route => (
        dispatch(receiveRoute(route))
    ))
);
export const fetchUserRoutes = filters => (userId) => dispatch => (
    APIUtil.fetchUserRoutes(filters)(userId).then(routes => (
        dispatch(receiveRoutes(routes))
    ))
);
export const updateRoute = (data, id) => dispatch => (
    APIUtil.updateRoute(data, id).then(route => (
        dispatch(receiveRoute(route))
    ))
)
export const deleteRoute = (id) => dispatch => (
    APIUtil.deleteRoute(id).then(() => (
        dispatch(removeRoute(id))
    ))
)
export const createRoute = (data) => dispatch => (
    APIUtil.createRoute(data).then(route => (
        dispatch(receiveRoute(route))
    ))
)
