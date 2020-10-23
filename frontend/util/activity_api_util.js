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
