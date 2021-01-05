export const UPDATE_ROUTES_LOADING = 'UPDATE_ROUTES_LOADING';
export const DELETE_ROUTES_LOADING = 'DELETE_ROUTES_LOADING';
export const CLEAR_ROUTES_LOADING = 'CLEAR_ROUTES_LOADING';

export const changeRoutesLoading = (routeId, value) => ({
    type: UPDATE_ROUTES_LOADING,
    routeId,
    value
});
export const deleteRoutesLoading = (routeId) => ({
    type: DELETE_ROUTES_LOADING,
    routeId
});
export const clearRoutesLoading = () => ({
    type: CLEAR_ROUTES_LOADING
});
