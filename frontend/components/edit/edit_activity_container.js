import { connect } from 'react-redux';
import EditActivity from './edit_activity'
import { activitySelector } from '../selectors/show_selector'
import { fetchActivity } from '../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } }, { match }) => ({
    userId: id,
    username: users[id].username,
    activity: activitySelector(users[id], activities, match.params.activityId)
})
const mDTP = dispatch => ({
    fetchActivity: (id) => dispatch(fetchActivity(id)),
})
export default connect(mSTP, mDTP)(EditActivity)
