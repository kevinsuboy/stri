import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'

const mSTP = state => {
    // debugger
    return {
        header: false
    }
}
const mDTP = dispatch => ({
    
})
export default connect(mSTP, mDTP)(NavBar)