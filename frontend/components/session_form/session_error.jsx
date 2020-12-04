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
        // debugger
        this.msg = [];
        if(this.props.errors.length > 0){ // errors to display
            while(this.props.errors.length > 0){
                this.msg.push(<li key={this.props.errors.length}>{this.props.errors.shift()}</li> )
            }
            this.setState({ errClass: "session-errors-display" });
            clearTimeout(this.timerId); //! gets rid of potentially stale timeouts upon new-errors
        }else{
            this.setTimer("",5000);
        }
    }
    render () {
        // debugger
        // this.state.errClass = "session-errors-display"
        return <div className={`session-errors ${this.props.type}-errors ${this.state.errClass}`}>
            <i className="fas fa-info-circle"></i><ul>{this.msg}</ul>
            <div className={`session-errors-arrow ${this.props.type}-errors-arrow`}></div>
            </div>
    };
}

export default SessionError;