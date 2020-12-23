export const UPDATE_ROUTES_LOADING = 'UPDATE_ROUTES_LOADING';

export const changeRoutesLoading = (routeId, value) => ({
    type: UPDATE_ROUTES_LOADING,
    routeId,
    value
});
