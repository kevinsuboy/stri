import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        formType: 'Log In',
        sessionClass: "session-login",
        footer: <p className="session-footer session-forgot-password">Forgot Username or Password?</p>,
        msg: <h3 className="session-msg">Log In</h3>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
