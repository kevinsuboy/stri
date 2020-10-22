export const fetchRoutes = data => (
    $.ajax({
        method: 'GET',
        url: 'api/route',
        data
    })
);
export const fetchRoute = id => (
    $.ajax({
        method: 'GET',
        url: `api/route/${id}`
    })
);
export const fetchUserRoutes = data => userId => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route`,
        data
    })
);
export const fetchUserRoute = (userId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route/${id}`
    })
);
