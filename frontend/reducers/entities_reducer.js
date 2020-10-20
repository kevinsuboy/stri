import { combineReducers } from 'redux';

import users from './users_reducer';
import routes from './routes_reducer'
import actvities from './activity_reducers'

export default combineReducers({
    users,
    routes,
    actvities
});
