import { connect } from 'react-redux';
import NewActivity from './new_activity'
import { createActivity } from '../../actions/activity_actions';

const mSTP = ({}) => ({
})
const mDTP = dispatch => ({
    action: (data, id) => dispatch(createActivity(data, id))
})
export default connect(mSTP, mDTP)(NewActivity)
