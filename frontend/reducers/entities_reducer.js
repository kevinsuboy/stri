import { combineReducers } from 'redux';

import users from './users_reducer';
import routes from './routes_reducer'
import activities from './activity_reducers'

export default combineReducers({
    users,
    routes,
    activities
});
