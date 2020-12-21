import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const DELETE_ROUTE = 'DELETE_ROUTE';
export const CLEAR_ROUTES = 'CLEAR_ROUTES';

export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

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
export const receiveErrors = errors => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
});
export const receiveClear = () => ({
    type: CLEAR_ROUTES
});


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
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
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
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
)
export const clearRoutes = () => dispatch => (
    dispatch(receiveClear())
)
