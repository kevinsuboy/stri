import { connect } from 'react-redux';
import Routes from './routes'
import { routeSelector } from '../selectors/index_selector'
import { fetchUserRoute } from '../../actions/route_actions'
import { updateUserRoutesFilter } from '../../actions/filter_actions'

const mSTP = ({ session: { id }, entities: { users, routes } }) => ({
    userId: id,
    username: users[id].username,
    routes: routeSelector(users[id], routes),
})
const mDTP = dispatch => ({
    updateUserRoutesFilter: (filters, value) => (userId) => dispatch(updateUserRoutesFilter(filters, value)(userId)),
    fetchUserRoute: (userId, id) => dispatch(fetchUserRoute(userId, id))
})
export default connect(mSTP, mDTP)(Routes)