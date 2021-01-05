export const fetchRoutes = data => (
    $.ajax({
        method: 'GET',
        url: 'api/route',
        data
    })
);
export const fetchRoute = id => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `api/route/${id}`
    })
};
export const fetchUserRoutes = data => userId => {
    return $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route`,
        data
    })
};
export const fetchUserRoute = (userId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route/${id}`
    })
);
export const updateRoute = (data, id) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/route/${id}`,
        data
    })
}
export const deleteRoute = routeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/route/${routeId}`
    })
)
export const createRoute = (data) => (
    $.ajax({
        method: 'POST',
        url: `api/route`,
        data
    })
)
