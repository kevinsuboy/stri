import { connect } from 'react-redux';
import NewRoute from './new_route'
import { createRoute } from '../../actions/route_actions';

const mSTP = ({}) => ({
})
const mDTP = dispatch => ({
    action: (data, id) => dispatch(createRoute(data, id))
})
export default connect(mSTP, mDTP)(NewRoute)
