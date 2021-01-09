import { connect } from 'react-redux';
import ActivityRouteItem from './activity_route_item'
import { routeSelector } from '../selectors/show_selector'
import { fetchRoute } from '../../actions/route_actions'
import { fetchRouteLocations } from '../../actions/location_actions';

const mSTP = ({ session: { id }, entities: { users, routes, locations } }) => ({
    userId: id,
    username: users[id].username,
    route: (routeId) => routeSelector(users[id], routes, routeId),
    locations: (routeId) => locations[routeId]
})
const mDTP = dispatch => ({
    fetchRoute: (id) => dispatch(fetchRoute(id)),
    fetchRouteLocations: (routeId) => dispatch(fetchRouteLocations(routeId)),
})
export default connect(mSTP, mDTP)(ActivityRouteItem)