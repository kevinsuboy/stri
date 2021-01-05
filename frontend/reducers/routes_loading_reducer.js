import { UPDATE_ROUTES_LOADING, CLEAR_ROUTES_LOADING, DELETE_ROUTES_LOADING } from '../actions/loading_actions';

const routesFilterReducer = (state = {}, action) => {
    Object.freeze(state);
    let newFilter;
    switch(action.type){
    case CLEAR_ROUTES_LOADING:
        return {};
    case UPDATE_ROUTES_LOADING:
        newFilter = {
            [action.routeId]: action.value
        };
        return Object.assign({}, state, newFilter);
    case DELETE_ROUTES_LOADING:
        newFilter = Object.assign({}, state);
        debugger
        delete newFilter[action.routeId];
        return Object.assign({}, newFilter);
    default:
        return state;
    }
};

export default routesFilterReducer;
