import { connect } from 'react-redux';
import NewActivity from './new_activity'
import { createActivity } from '../../actions/activity_actions';
import { update } from '../../actions/session_actions';
import { clearRoutesFilter, changeRoutesFilter, fetchFilteredUserRoutes } from '../../actions/filter_actions';
import { routeSelector } from '../selectors/index_selector';
import { clearRoutes } from '../../actions/route_actions';

const mSTP = ({ session: { id }, entities: { users, routes } }) => ({
    userId: id,
    routesCnt: routes.totalCnt,
    routes: routeSelector(users[id], routes),
})
const mDTP = dispatch => ({
    action: (data) => dispatch(createActivity(data)),
    updateUser: () => dispatch(update()),
    clearRoutesFilter: () => dispatch(clearRoutesFilter()),
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    clearRoutes: () => dispatch(clearRoutes()),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId))
})
export default connect(mSTP, mDTP)(NewActivity)
