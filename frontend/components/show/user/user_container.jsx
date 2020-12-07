import { connect } from 'react-redux';
import User from './user'
import selector from '../../selectors/dashboard_selector'

const mSTP = state => (
    selector(state)
)
const mDTP = dispatch => ({
})
export default connect(mSTP, mDTP)(User)