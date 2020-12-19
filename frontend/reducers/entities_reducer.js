import { combineReducers } from 'redux';

import users from './users_reducer';
import routes from './routes_reducer'
import activities from './activity_reducers'
import locations from './locations_reducer'

export default combineReducers({
    users,
    routes,
    activities,
    locations
});
