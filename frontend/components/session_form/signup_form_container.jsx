import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return {
        formType: 'Sign Up',
        sessionClass: "session-login",
        footer: <p className="session-footer session-disclaimer">By signing up for Stri, you agree to the Terms of Service. View our Privacy Policy.</p>,
        msg: <h3 className="session-msg">Join Stri today, it's Free</h3>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
