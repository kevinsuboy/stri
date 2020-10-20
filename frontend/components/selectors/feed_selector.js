export const routeSelector = (currentUser, allRoutes) => {
    // debugger
    if (Object.keys(allRoutes).length !== 0) return currentUser.routes.map(id => allRoutes[id])
    else return [];
}
export const activitySelector = (currentUser, allActivities) => {
    debugger
    if(Object.keys(allActivities).length!==0) return currentUser.activities.map(id => allActivities[id])
    else return [];
}

