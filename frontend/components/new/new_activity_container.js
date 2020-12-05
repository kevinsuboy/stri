import { connect } from 'react-redux';
import NewActivity from './new_activity'
import { createActivity } from '../../actions/activity_actions';
import { update } from '../../actions/session_actions';

const mSTP = ({ session: { id }}) => ({
    userId: id
})
const mDTP = dispatch => ({
    action: (data) => dispatch(createActivity(data)),
    updateUser: () => dispatch(update())
})
export default connect(mSTP, mDTP)(NewActivity)
