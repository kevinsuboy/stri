import { connect } from 'react-redux';
import Routes from './routes'
import { routeSelector } from '../selectors/index_selector'
import { fetchFilteredUserRoutes, changeRoutesFilter } from '../../actions/filter_actions'
import { fetchUserRoute, fetchUserRoutes } from '../../actions/route_actions'

const mSTP = ({ session: { id }, entities: { users, routes } }) => ({
    userId: id,
    username: users[id].username,
    routes: routeSelector(users[id], routes),
})
const mDTP = dispatch => ({
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId)),
    fetchUserRoutes: (userId) => dispatch(fetchUserRoutes()(userId)),
    fetchUserRoute: (userId, id) => dispatch(fetchUserRoute(userId, id)),
})
export default connect(mSTP, mDTP)(Routes)