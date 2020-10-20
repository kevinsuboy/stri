import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';

export const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
})
export const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
})

export const fetchUserActivity = (userId, id) => dispatch => (
    APIUtil.fetchUserActivity(userId, id).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);
export const fetchUserActivities = (userId) => dispatch => (
    APIUtil.fetchUserActivities(userId).then(activities => (
        dispatch(receiveActivities(activities))
    ))
);
