import {
    RECEIVE_ACTIVITIES,
    RECEIVE_ACTIVITY,
    DELETE_ACTIVITY
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
        case DELETE_ACTIVITY:
            let nextState = Object.assign({}, state);
            delete nextState[action.activityId]
            return nextState
        default:
            return state;
    }
};

export default activitiesReducer;
