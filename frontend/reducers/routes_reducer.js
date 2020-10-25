import {
    RECEIVE_ROUTES,
    RECEIVE_ROUTE,
    DELETE_ROUTE
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            // debugger
            return Object.assign({}, state, {[action.route.id]: action.route});
        case DELETE_ROUTE:
            let nextState = Object.assign({}, state);
            delete nextState[action.routeId]
            return nextState
        default:
            return state;
    }
};

export default routesReducer;
