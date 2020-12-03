import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

export const RECEIVE_ACTIVITY_ERRORS = 'DELETE_ACTIVITY';

export const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES,
    activities
})
export const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
})
export const removeActivity = (activityId) => ({
    type: DELETE_ACTIVITY,
    activityId
})
export const receiveErrors = errors => ({
    type: RECEIVE_ACTIVITY_ERRORS,
    errors
});

export const fetchActivity = (id) => dispatch => (
    APIUtil.fetchActivity(id).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);
export const fetchUserActivities = filters => (userId) => dispatch => (
    APIUtil.fetchUserActivities(filters)(userId).then(activities => (
        dispatch(receiveActivities(activities))
    ))
);
export const updateActivity = (data,id) => dispatch => (
    APIUtil.updateActivity(data,id).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);
export const deleteActivity = (id) => dispatch => (
    APIUtil.deleteActivity(id).then(() => (
        dispatch(removeActivity(id))
    ))
)
export const createActivity = (data) => dispatch => (
    APIUtil.createActivity(data).then(activity => (
        dispatch(receiveActivity(activity))
    ), err => (
            dispatch(receiveErrors(err.responseJSON))
    ))
)
