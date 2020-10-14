import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'

const mSTP = state => {
    // debugger
    return {
    id: state.session.id, rmb: state.session.rmb
}}
const mDTP = dispatch => ({
    logout: () => dispatch(logout)
})
export default connect(mSTP,mDTP)(NavBar)