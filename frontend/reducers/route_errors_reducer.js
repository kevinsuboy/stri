import {
    RECEIVE_ROUTE_ERRORS,
    RECEIVE_ROUTE,
    RECEIVE_ROUTES,
} from '../actions/route_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUTE_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_ROUTE:
            return [];
        case RECEIVE_ROUTES:
            return [];
        default:
            return state;
    }
};
