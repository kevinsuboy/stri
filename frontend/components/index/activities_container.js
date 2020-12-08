import { connect } from 'react-redux';
import Activities from './activities'
import { activitySelector } from '../selectors/index_selector'
import { fetchFilteredUserActivities, changeActivitiesFilter, clearActivitiesFilter } from '../../actions/filter_actions'
import { fetchUserActivity, fetchUserActivities, deleteActivity } from '../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } }) => ({
    userId: id,
    username: users[id].username,
    activitiesCnt: activities.totalCnt,
    // activitiesCnt: users[id].activities.length,
    activities: activitySelector(users[id], activities)
})
const mDTP = dispatch => ({
    clearActivitiesFilter: () => dispatch(clearActivitiesFilter()),
    changeActivitiesFilter: (filter, value) => dispatch(changeActivitiesFilter(filter, value)),
    fetchFilteredUserActivities: (userId) => dispatch(fetchFilteredUserActivities(userId)),
    fetchUserActivities: (userId) => dispatch(fetchUserActivities()(userId)),
    deleteActivity: (id) => dispatch(deleteActivity(id))
})
export default connect(mSTP, mDTP)(Activities)