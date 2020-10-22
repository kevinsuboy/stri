import { connect } from 'react-redux';
import Activities from './activities_feed'
import { activitySelector } from '../../selectors/feed_selector'
import { fetchUserActivity, fetchUserActivities } from '../../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } }) => ({
    userId: id,
    username: users[id].username,
    activities: activitySelector(users[id], activities)
})
const mDTP = dispatch => ({
    fetchUserActivities: (userId) => dispatch(fetchUserActivities(userId)),
    fetchUserActivity: (userId, id) => dispatch(fetchUserActivity(userId, id)),
})
export default connect(mSTP, mDTP)(Activities)