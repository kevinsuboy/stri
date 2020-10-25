import { connect } from 'react-redux';
import Activity from './activity'
import { activitySelector } from '../selectors/show_selector'
import { fetchActivity, deleteActivity } from '../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } },{match}) => ({
    userId: id,
    username: users[id].username,
    activity: activitySelector(users[id], activities, match.params.activityId)
})
const mDTP = dispatch => ({
    fetchActivity: (id) => dispatch(fetchActivity(id)),
    deleteAction: (id) => dispatch(deleteActivity(id))
})
export default connect(mSTP, mDTP)(Activity)
