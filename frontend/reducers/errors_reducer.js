import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import activity from './activity_errors_reducer';
import route from './route_errors_reducer';

export default combineReducers({
    session,
    activity,
    route
});
