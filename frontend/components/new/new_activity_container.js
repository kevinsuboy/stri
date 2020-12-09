import { connect } from 'react-redux';
import NewActivity from './new_activity'
import { createActivity } from '../../actions/activity_actions';
import { update } from '../../actions/session_actions';
import { clearRoutesFilter, changeRoutesFilter, fetchFilteredUserRoutes } from '../../actions/filter_actions';

const mSTP = ({ session: { id }}) => ({
    userId: id
})
const mDTP = dispatch => ({
    action: (data) => dispatch(createActivity(data)),
    updateUser: () => dispatch(update()),
    clearRoutesFilter: () => dispatch(clearRoutesFilter()),
    changeRoutesFilter: (filter, value) => dispatch(changeRoutesFilter(filter, value)),
    fetchFilteredUserRoutes: (userId) => dispatch(fetchFilteredUserRoutes(userId))
})
export default connect(mSTP, mDTP)(NewActivity)
