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

export const fetchFilteredUserRoutes = userId => (dispatch, getState) => {
    return fetchUserRoutes(getState().ui.filters.route)(userId)(dispatch);
};
export const fetchFilteredUserActivities = userId => (dispatch, getState) => {
    return fetchUserActivities(getState().ui.filters.activity)(userId)(dispatch);
};
