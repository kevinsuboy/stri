import React from 'react';
import SessionErrorContainer from './session_error_container'

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
    componentDidMount(){
        const body = document.getElementsByTagName("body")[0];
        body.className = `session-img background-${Math.floor(Math.random() * 26) + 1}`;
    }
    componentWillUnmount(){
        const body = document.getElementsByTagName("body")[0];
        body.className = ``;
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
        let rmb = undefined
        let uname = undefined
        if (this.props.formType === "Sign Up") {
            uname = < input type = "text"
                    value = { this.state.username }
                    onChange = { this.handleChange('username') }
                    className = "session-input"
                    placeholder = "Username"
                />
        } else {
            rmb = <label className="session-form-label">
                <input type="checkbox"
                    name="Remember Me"
                    className="session-radio"
                    value="on" 
                    onChange={this.handleChange('rmb')}/> Remember Me
                </label>
        }
        return{
            rmb,
            uname
        }
    }

    render() {
        const { rmb,uname} = this.handleForm();
        const {msg, sessionClass,footer} = this.props;
        // debugger
        return (
            <div className="session-form-container container">
                {msg}
                <form onSubmit={this.handleSubmit} className="session-form">
                    <SessionErrorContainer />
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
