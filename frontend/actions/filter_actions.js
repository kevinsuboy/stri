import { fetchUserActivities } from './activity_actions'
import { fetchUserRoutes } from './route_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateUserRoutesFilter = (filter, value) => userId => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchUserRoutes(getState().ui.filters)(userId)(dispatch);
};
export const updateUserActivitiesFilter = (filter, value) => userId => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    // debugger
    return fetchUserActivities(getState().ui.filters)(userId)(dispatch);
};
