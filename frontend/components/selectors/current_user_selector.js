export default (state) => {
    if (state.session.id) {
        return (
            state.entities.users[state.session.id]
        )
    }
    return null;
}