import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard'
import selector from '../selectors/dashboard_selector'

const mSTP = ({ session: { id }, entities: { users } }) => (
    selector(id, users)
)
const mDTP = dispatch => ({
})
export default connect(mSTP, mDTP)(Dashboard)