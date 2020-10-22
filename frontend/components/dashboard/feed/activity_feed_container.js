import { connect } from 'react-redux';
import Activities from './activities_feed'
import { activitySelector } from '../../selectors/index_selector'
import { fetchFilteredUserActivities, changeActivitiesFilter } from '../../../actions/filter_actions'
import { fetchUserActivity } from '../../../actions/activity_actions'

const mSTP = ({ session: { id }, entities: { users, activities } }) => ({
    userId: id,
    username: users[id].username,
    activities: activitySelector(users[id], activities)
})
const mDTP = dispatch => ({
    changeActivitiesFilter: (filter, value) => dispatch(changeActivitiesFilter(filter,value)),
    fetchFilteredUserActivities: (userId) => dispatch(fetchFilteredUserActivities(userId)),
})
export default connect(mSTP, mDTP)(Activities)