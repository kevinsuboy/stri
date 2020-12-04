import { connect } from 'react-redux';
import SessionError from '../session_form/session_error';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.route,
        type: "route"
    };
};

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionError);
