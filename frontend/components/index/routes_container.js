import { connect } from 'react-redux';
import Routes from './routes'
import { routeSelector } from '../selectors/feed_selector'
import { fetchUserRoutes, fetchUserRoute } from '../../actions/route_actions'

const mSTP = ({ session: { id }, entities: { users, routes } }) => ({
    username: users[id].username,
    routes: routeSelector(users[id], routes),
})
const mDTP = dispatch => ({
    fetchUserRoutes: (userId) => dispatch(fetchUserRoutes(userId)),
    fetchUserRoute: (userId, id) => dispatch(fetchUserRoute(userId, id))
})
export default connect(mSTP, mDTP)(Routes)