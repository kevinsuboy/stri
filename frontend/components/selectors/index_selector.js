export const routeSelector = (currentUser, allRoutes) => {
    debugger
    if (Object.keys(allRoutes).length !== 0) {
        return currentUser.routes.map(id => allRoutes[id]).filter(el => el);
    }
    else return [];
}
export const activitySelector = (currentUser, allActivities) => {
    if (Object.keys(allActivities).length !== 0) {
        // debugger
        return currentUser.activities.map(id => allActivities[id]).filter(el => el);
    }
    else return [];
}

