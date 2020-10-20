export const fetchActivities = data => (
    $.ajax({
        method: 'GET',
        url: 'api/activity',
        data
    })
);
export const fetchActivity = id => (
    $.ajax({
        method: 'GET',
        url: `api/activity/${id}`
    })
);
export const fetchUserActivities = userId => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/activity`
    })
);
export const fetchUserActivity = (userId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/activity/${id}`
    })
);
export const fetchUserRoutes = userId => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route`
    })
);
export const fetchUserRoute = (userId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/route/${id}`
    })
);
