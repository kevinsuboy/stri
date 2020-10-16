import React from 'react'

class SessionError extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            errClass: "",
            errors: []
        }
        this.msg = "";
        this.show = false;
    }
    setTimer(errClass,time=1500){
        this.timerId = setTimeout(() => {
            this.setState({ errClass })
        }, time)
    }
    componentDidUpdate(prevProps){
        debugger
        this.msg = "";
        this.state.errClass = ""
        if(this.props.errors.length > 0){ // still have errors
            if(!this.show){
                this.setState({ errClass: "session-errors-display" });
                this.msg = this.props.errors.shift();
            }else{
                this.setTimer("session-errors-display");
                this.msg = this.props.errors.shift();
            }
            this.show = true;
        }else if(this.show){
            this.setTimer("");
            this.show = false;
        }
    }
    render () {
        debugger
        // this.state.errClass = "session-errors-display"
        return <div className={`session-errors ${this.state.errClass}`}>
            <i className="fas fa-info-circle"></i><p>{this.msg}</p>
            <div className="session-errors-arrow"></div>
            </div>
    };
}

export default SessionError;