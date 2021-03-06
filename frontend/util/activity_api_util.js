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
export const fetchUserActivities = (data) => (userId) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/activity`,
        data
    })
);
export const fetchRouteActivities = (data) => (routeId) => (
    $.ajax({
        method: 'GET',
        url: `api/route/${routeId}/activity`,
        data
    })
);
export const fetchUserActivity = (userId, id) => (
    $.ajax({
        method: 'GET',
        url: `api/user/${userId}/activity/${id}`
    })
);
export const updateActivity = (data, id) => (
    $.ajax({
        method: 'PATCH',
        url: `api/activity/${id}`,
        data
    })
)
export const deleteActivity = activityId => (
    $.ajax({
        method: 'DELETE',
        url: `api/activity/${activityId}`
    })
)
export const createActivity = (data) => (
    $.ajax({
        method: 'POST',
        url: `api/activity`,
        data
    })
)
