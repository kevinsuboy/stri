import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {
                id: window.currentUser.id,
                rmb: window.rmb
            }
        };
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, root);
    //! test
    window.store = store;
    window.login = login
    window.getState = store.getState;
    window.pS = preloadedState;
    window.logout = logout;
});
