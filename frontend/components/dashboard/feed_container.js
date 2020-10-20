import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Feed from './feed'

const mSTP = state => ({

})
const mDTP = dispatch => ({
})
export default connect(mSTP, mDTP)(Feed)