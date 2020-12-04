import { connect } from 'react-redux';
import NewRoute from './new_route'
import { createRoute } from '../../actions/route_actions';

const mSTP = ({}) => ({
})
const mDTP = dispatch => ({
    action: (data) => dispatch(createRoute(data))
})
export default connect(mSTP, mDTP)(NewRoute)
