import {
    RECEIVE_LOCATION,
    RECEIVE_LOCATIONS,
} from '../actions/location_actions';

const routesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOCATION:
            // return action.locations;
            return Object.assign({},state,action.location)
        case RECEIVE_LOCATIONS:
            return action.locations;
        default:
            return state;
    }
};

export default routesReducer;
