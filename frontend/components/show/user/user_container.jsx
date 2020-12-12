import { connect } from 'react-redux';
import User from './user'
import selector from '../../selectors/dashboard_selector'
import { activitySelector } from '../../selectors/index_selector';
import { clearActivitiesFilter, changeActivitiesFilter, fetchFilteredUserActivities } from '../../../actions/filter_actions';

const mSTP = ({ session: { id }, entities: { users, activities } }) => (
    Object.assign(
        selector(id, users),
        {activities: activitySelector(users[id], activities)}
    )
)
const mDTP = dispatch => ({
    clearActivitiesFilter: () => dispatch(clearActivitiesFilter()),
    changeActivitiesFilter: (filter, value) => dispatch(changeActivitiesFilter(filter, value)),
    fetchFilteredUserActivities: (userId) => dispatch(fetchFilteredUserActivities(userId)),
})
export default connect(mSTP, mDTP)(User)