import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Feed from './feed'
import {fetchUserActivity, fetchUserActivities} from '../../actions/activity_actions'
import { fetchUserRoutes, fetchUserRoute } from '../../actions/route_actions'

const mSTP = state => ({
    userId: state.session.id,
})
const mDTP = dispatch => ({
    fetchUserActivities: (userId) => dispatch(fetchUserActivities(userId)),
    fetchUserActivity: (userId, id) => dispatch(fetchUserActivity(userId, id)),
    fetchUserRoutes: (userId) => dispatch(fetchUserRoutes(userId)),
    fetchUserRoute: (userId, id) => dispatch(fetchUserRoute(userId, id))
})
export default connect(mSTP, mDTP)(Feed)