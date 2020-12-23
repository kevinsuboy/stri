import { connect } from 'react-redux';
import Routes from './routes_feed'
import { routeSelector } from '../../selectors/index_selector'
import { fetchUserRoutes } from '../../../actions/route_actions'
import { fetchFilteredUserRoutes, changeRoutesFilter, clearRoutesFilter } from '../../../actions/filter_actions'
import { fetchAllLocations } from '../../../actions/location_actions';

const mSTP = ({ session: { id }, entities: { users, routes, locations } }) => ({
    userId: id,
    username: users[id].username,
    routes: routeSelector(users[id], routes),
    locations
})
const mDTP = dispatch => ({
    clearRoutesFilter: () => dispatch(clearRoutesFilter()),
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId)),
    fetchAllLocations: (routeIds) => dispatch(fetchAllLocations(routeIds))
})
export default connect(mSTP, mDTP)(Routes)