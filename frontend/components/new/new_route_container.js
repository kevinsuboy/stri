import { connect } from 'react-redux';
import NewRoute from './new_route'
import { createRoute } from '../../actions/route_actions';

const mSTP = ({ session: { id } }) => ({
    userId: id
})
const mDTP = dispatch => ({
    action: (data) => dispatch(createRoute(data)),
    updateUser: () => dispatch(update())
})
export default connect(mSTP, mDTP)(NewRoute)
