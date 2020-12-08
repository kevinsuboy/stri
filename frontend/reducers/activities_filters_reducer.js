import { UPDATE_ACTIVITIES_FILTER, CLEAR_ACTIVITIES_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    recentDays: null,
    keywords: null,
    sport: null,
    cnt: null,
    offset: 0
});

const activitiesFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
    case UPDATE_ACTIVITIES_FILTER:
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    case CLEAR_ACTIVITIES_FILTER:
        return defaultFilters;
    default:
        return state;
    }
};

export default activitiesFilterReducer;
