import { connect } from 'react-redux';
import Routes from './routes_feed'
import { routeSelector } from '../../selectors/index_selector'
import { fetchUserRoutes } from '../../../actions/route_actions'
import { fetchFilteredUserRoutes, changeRoutesFilter, clearRoutesFilter } from '../../../actions/filter_actions'

const mSTP = ({ session: { id }, entities: { users, routes } }) => ({
    userId: id,
    username: users[id].username,
    routes: routeSelector(users[id], routes),
})
const mDTP = dispatch => ({
    clearRoutesFilter: () => dispatch(clearRoutesFilter()),
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId)),
})
export default connect(mSTP, mDTP)(Routes)