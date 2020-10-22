import { UPDATE_ACTIVITIES_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    recentDays: null,
    sport: null
});

const activitiesFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    // debugger
    if (action.type === UPDATE_ACTIVITIES_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default activitiesFilterReducer;
