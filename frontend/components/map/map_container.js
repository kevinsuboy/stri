import { connect } from 'react-redux';
import Map from './map'
import { changeRoutesLoading, deleteRoutesLoading } from '../../actions/loading_actions';

const mSTP = ({ ui: { loading:{ route } } }) => ({
    routeLoading: Object.entries(route)
})
const mDTP = dispatch => ({
    changeRoutesLoading: (routeId, value) => dispatch(changeRoutesLoading(routeId, value)),
    deleteRoutesLoading: (routeId) => dispatch(deleteRoutesLoading(routeId)),
})
export default connect(mSTP, mDTP)(Map)