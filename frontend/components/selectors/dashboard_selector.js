export default (sessionId, users) => {
    if (sessionId) {
        const user = users[sessionId];
        return ({
            userId: sessionId,
            username: user.username,
            n_routes: user.routes.length,
            n_activities: user.activities.length,
            latest: user.latest
        })
    }
    return {
        userId: null,
        username: "",
        n_routes: 0,
        n_activities: 0,
        latest: null
    };
}