import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'

import selector from '../selectors/username_selector'

const mSTP = state => {
    return {
    username: selector(state),
    userId: state.session.id,
    header: true
}}
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(mSTP,mDTP)(NavBar)