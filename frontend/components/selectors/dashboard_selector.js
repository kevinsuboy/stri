export default (state) => {
    if (state.session.id) {
        const user = state.entities.users[state.session.id];
        return ({
            username: user.username,
            n_routes: user.routes.length,
            n_activities: user.activities.length,
            latest: user.latest
        })
    }
    return {
        username: "",
        n_routes: 0,
        n_activities: 0,
        latest: null
    };
}