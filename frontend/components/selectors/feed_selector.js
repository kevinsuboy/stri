export const routeSelector = (currentUser, allRoutes) => {
    // debugger
    return currentUser.routes.map(id => allRoutes[id])
}
export const activitySelector = (currentUser, allActivities) => {
    // debugger
    return currentUser.activities.map(id => allActivities[id])
}

