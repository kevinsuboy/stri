import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Splash from './splash'

const mSTP = state => ({
})
const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    signup: () => dispatch(signup())
})
export default connect(mSTP, mDTP)(Splash)