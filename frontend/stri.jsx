import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { login, logout } from "./actions/session_actions";
import { fetchUserRoutes } from "./actions/route_actions"
import { fetchUserActivities } from "./actions/activity_actions"
// import { watchOutside } from "./util/dom_util"

document.addEventListener("DOMContentLoaded", () => {
    // watchOutside();
    const root = document.getElementById("root");
    const body = document.getElementsByTagName("body")[0];
    body.className = "background-splash";
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
    window.fetchUserRoutes = fetchUserRoutes;
    window.fetchUserActivities = fetchUserActivities;
});
