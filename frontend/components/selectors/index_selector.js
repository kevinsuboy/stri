export const routeSelector = (currentUser, allRoutes) => {
    // debugger
    if (Object.keys(allRoutes).length !== 0) {
        const d = new Date(); d.setDate(d.getDate() - 60);
        return currentUser.routes.map(id => allRoutes[id]).filter(el => new Date(el.created_at) > d);
    }
    else return [];
}
export const activitySelector = (currentUser, allActivities) => {
    if (Object.keys(allActivities).length !== 0) {
        // debugger
        return currentUser.activities.map(id => allActivities[id]).filter(el => new Date(el.date) > d);
    }
    else return [];
}

