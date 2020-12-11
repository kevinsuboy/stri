import { connect } from 'react-redux';
import Activity from './activity'
import { activitySelector, routeSelector } from '../selectors/show_selector'
import { fetchActivity, deleteActivity } from '../../actions/activity_actions'
import { fetchRoute } from '../../actions/route_actions';

const mSTP = ({ session: { id }, entities: { users, activities, routes } },{match}) => {
    // debugger
    return{
    userId: id,
    username: users[id].username,
    activity: activitySelector(users[id], activities, match.params.activityId),
    route: (routeId) => routeSelector(users[id], routes, routeId)
}}
const mDTP = dispatch => ({
    fetchActivity: (id) => dispatch(fetchActivity(id)),
    fetchRoute: (id) => dispatch(fetchRoute(id)),
    deleteAction: (id) => dispatch(deleteActivity(id))
})
export default connect(mSTP, mDTP)(Activity)
