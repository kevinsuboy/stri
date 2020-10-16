export default (state) => {
    if(state.session.id){
        return(
            state.entities.users[state.session.id].username
        )
    }
    return null;
}