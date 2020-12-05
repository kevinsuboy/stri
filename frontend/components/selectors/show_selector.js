export const routeSelector = (currentUser, allRoutes, routeId) => {
    // debugger
    if (Object.keys(allRoutes).length !== 0) {
        return currentUser.routes.filter(id=>id===parseInt(routeId)).map(id => allRoutes[id]);
    }
    else return [];
}
export const activitySelector = (currentUser, allActivities, activityId) => {
    debugger
    if (Object.keys(allActivities).length !== 0) {
        return currentUser.activities.filter(id => id === parseInt(activityId)).map(id => allActivities[id]).filter(el => el);
    }
    else return [];
}

