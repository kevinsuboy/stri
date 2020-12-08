import { UPDATE_ROUTES_FILTER, CLEAR_ROUTES_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    recentDays: null,
    keywords: null,
    cnt: null,
    offset: 0
});

const routesFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch(action.type){
    case UPDATE_ROUTES_FILTER:
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    case CLEAR_ROUTES_FILTER:
        return defaultFilters;
    default:
        return state;
    }
};

export default routesFilterReducer;
