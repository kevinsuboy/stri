import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            rmb: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // debugger
        if (!this.state.rmb) { // want to forget
            window.addEventListener('beforeunload', (ev) => {
                this.props.logout();
                ev.preventDefault();
                return ev.returnValue = 'Are you sure you want to close?';
            });
        }
        this.props.action(user)
            .then(() => this.props.history.push('/dashboard'));
    }

    handleForm(){
        // debugger
        let msg = this.props.formType;
        let sessionClass = "session-login"
        let footer = <p className="session-footer session-disclaimer">By signing up for Stri, you agree to the Terms of Service. View our Privacy Policy.</p>
        let rmb = undefined
        let uname = undefined
        if (this.props.formType === "Sign Up") {
            msg = <p className="session-msg">Join Stri today, it's Free</p>
            sessionClass = "session-signup"
            uname = < input type = "text"
                    value = { this.state.username }
                    onChange = { this.handleChange('username') }
                    className = "session-input"
                    placeholder = "Username"
                />
        } else {
            msg = <p className="session-msg">Log In</p>
            footer = <p className="session-footer session-forgot-password">Forgot Username or Password?</p>
            rmb = <label className="session-form-label">
                <input type="checkbox"
                    name="Remember Me"
                    className="session-radio"
                    value="on" 
                    onChange={this.handleChange('rmb')}/>
                    Remember Me</label>
        }
        return{
            msg,
            sessionClass,
            footer,
            rmb,
            uname
        }
    }

    render() {
        const { msg,sessionClass,footer,rmb,uname} = this.handleForm();
        return (
            <div className="session-form-container container">
                {msg}
                <form onSubmit={this.handleSubmit} className="session-form">
                    {uname}
                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        className="session-input"
                        placeholder="Email"
                    />
                    <br />
                    <input type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        className="session-input"
                        placeholder="Password"
                    />
                    <br />
                    {rmb} <br />
                    <input className={`session-submit ${sessionClass} link session-link`} type="submit" value={this.props.formType} />
                    <br />
                </form>
                {footer}
            </div>
        );
    }
}

export default SessionForm;
