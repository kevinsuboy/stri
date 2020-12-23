import { combineReducers } from 'redux';

import filters from './filters_reducer';
import loading from './loading_reducer';

export default combineReducers({
    filters,
    loading,
});
