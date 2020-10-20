export default (state) => {
    for(state.entities.user)
        const user = state.entities.users[state.session.id];
        return ({
            username: user.username,
            n_routes: user.routes.length,
            n_activities: user.activities.length,
            latest: user.latest
        })
    }
}