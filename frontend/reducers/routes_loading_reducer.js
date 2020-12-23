import { UPDATE_ROUTES_LOADING } from '../actions/loading_actions';

const routesFilterReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
    case UPDATE_ROUTES_LOADING:
        const newFilter = {
            [action.routeId]: action.value
        };
        return Object.assign({}, state, newFilter);
    default:
        return state;
    }
};

export default routesFilterReducer;
