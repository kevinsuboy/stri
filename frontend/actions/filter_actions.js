import { fetchUserActivities } from './activity_actions'
import { fetchUserRoutes } from './route_actions'

export const UPDATE_ROUTES_FILTER = 'UPDATE_ROUTES_FILTER';
export const UPDATE_ACTIVITIES_FILTER = 'UPDATE_ACTIVITIES_FILTER';

export const changeRoutesFilter = (filter, value) => ({
    type: UPDATE_ROUTES_FILTER,
    filter,
    value
});
export const changeActivitiesFilter = (filter, value) => ({
    type: UPDATE_ACTIVITIES_FILTER,
    filter,
    value
});

export const updateUserRoutesFilter = (filter, value) => userId => (dispatch, getState) => {
    dispatch(changeRoutesFilter(filter, value));
    return fetchUserRoutes(getState().ui.filters.routes)(userId)(dispatch);
};
export const updateUserActivitiesFilter = (filters) => userId => (dispatch, getState) => {
    dispatch(changeActivitiesFilter(filter, value));
    debugger
    return fetchUserActivities(getState().ui.filters.activity)(userId)(dispatch);
};
