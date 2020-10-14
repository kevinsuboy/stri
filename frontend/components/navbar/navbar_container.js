import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './NavBar'

const mSTP = state => {
    debugger
    return {
    currentUserId: state.session.id
}}
const mDTP = dispatch => ({
    logout: () => dispatch(logout)
})
export default connect(mSTP,mDTP)(NavBar)