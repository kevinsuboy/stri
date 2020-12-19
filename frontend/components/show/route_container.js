import { connect } from 'react-redux';
import Route from './route'
import { activitySelector } from '../selectors/index_selector'
import { routeSelector } from '../selectors/show_selector'
import { fetchRoute, deleteRoute } from '../../actions/route_actions'
import { fetchRouteActivities } from '../../actions/activity_actions';
import { fetchRouteLocations } from '../../actions/location_actions';

const mSTP = ({ session: { id }, entities: { users, routes, activities, locations } },{match}) => ({
    userId: id,
    username: users[id].username,
    route: routeSelector(users[id], routes, match.params.routeId),
    activities: activitySelector(users[id], activities),
    locations: locations[match.params.routeId]
})
const mDTP = dispatch => ({
    fetchRoute: (id) => dispatch(fetchRoute(id)),
    fetchRouteActivities: (routeId) => dispatch(fetchRouteActivities()(routeId)),
    fetchRouteLocations: (routeId) => dispatch(fetchRouteLocations(routeId)),
    deleteAction: (id) => dispatch(deleteRoute(id))
})
export default connect(mSTP, mDTP)(Route)