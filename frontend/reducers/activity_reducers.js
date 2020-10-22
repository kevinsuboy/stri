import {
    RECEIVE_ACTIVITIES,
    RECEIVE_ACTIVITY
} from '../actions/activity_actions';

const activitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            // debugger
            return action.activities;
        case RECEIVE_ACTIVITY:
            // debugger
            return Object.assign({}, state, { [action.activity.id]: action.activity });
        default:
            return state;
    }
};

export default activitiesReducer;
