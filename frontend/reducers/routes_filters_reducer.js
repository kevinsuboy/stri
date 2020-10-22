import { UPDATE_ROUTES_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    recentDays: null,
});

const routesFilterReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_ROUTES_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default routesFilterReducer;
