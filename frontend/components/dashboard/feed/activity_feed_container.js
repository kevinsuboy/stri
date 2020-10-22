import { connect } from 'react-redux';
import Activities from './activities_feed'
import { activitySelector } from '../../selectors/index_selector'
// import { activitySelector } from '../../selectors/feed_selector'
import { updateUserActivitiesFilter } from '../../../actions/filter_actions'
import { fetchUserActivity } from '../../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } }) => ({
    userId: id,
    username: users[id].username,
    activities: activitySelector(users[id], activities)
})
const mDTP = dispatch => ({
    updateUserActivitiesFilter: (filters, value) => (userId) => dispatch(updateUserActivitiesFilter(filters, value)(userId)),
    fetchUserActivity: (userId, id) => dispatch(fetchUserActivity(userId, id)),
})
export default connect(mSTP, mDTP)(Activities)