import { connect } from 'react-redux';
import Route from './route'
import { routeSelector } from '../selectors/show_selector'
import { fetchRoute } from '../../actions/route_actions'

const mSTP = ({ session: { id }, entities: { users, routes } },{match}) => ({
    userId: id,
    username: users[id].username,
    route: routeSelector(users[id], routes, match.params.routeId),
})
const mDTP = dispatch => ({
    fetchRoute: (id) => dispatch(fetchRoute(id)),
})
export default connect(mSTP, mDTP)(Route)