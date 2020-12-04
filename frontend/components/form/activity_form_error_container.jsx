import { connect } from 'react-redux';
import React from 'react';
import SessionError from '../session_form/session_error';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.activity,
        type: "activity"
    };
};

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionError);
