import {
    RECEIVE_ACTIVITY_ERRORS,
    RECEIVE_ACTIVITY,
    RECEIVE_ACTIVITIES,
} from '../actions/activity_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITY_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_ACTIVITY:
            return [];
        case RECEIVE_ACTIVITIES:
            return [];
        default:
            return state;
    }
};
