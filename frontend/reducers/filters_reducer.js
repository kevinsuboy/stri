import { combineReducers } from 'redux';

import activity from './activities_filters_reducer';
import route from './routes_filters_reducer';

export default combineReducers({
    route,
    activity
});
