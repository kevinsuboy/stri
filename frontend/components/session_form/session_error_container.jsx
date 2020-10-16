import { connect } from 'react-redux';
import React from 'react';
import SessionError from './session_error';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionError);
