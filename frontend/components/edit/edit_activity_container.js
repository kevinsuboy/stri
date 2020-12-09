import { connect } from 'react-redux';
import EditActivity from './edit_activity'
import { activitySelector } from '../selectors/show_selector'
import { fetchActivity, updateActivity } from '../../actions/activity_actions'
import { routeSelector } from '../selectors/index_selector';
import { clearRoutesFilter, changeRoutesFilter, fetchFilteredUserRoutes } from '../../actions/filter_actions';
import { clearRoutes } from '../../actions/route_actions';

const mSTP = ({ session: { id }, entities: { users, activities, routes } }, { match }) => ({
    // userId: id,
    // username: users[id].username,
    routesCnt: routes.totalCnt,
    routes: routeSelector(users[id], routes),
    activity: activitySelector(users[id], activities, match.params.activityId)
})
const mDTP = dispatch => ({
    clearRoutesFilter: () => dispatch(clearRoutesFilter()),
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    clearRoutes: () => dispatch(clearRoutes()),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId)),
    fetchActivity: (id) => dispatch(fetchActivity(id)),
    action: (data, id) => dispatch(updateActivity(data,id))
})
export default connect(mSTP, mDTP)(EditActivity)
