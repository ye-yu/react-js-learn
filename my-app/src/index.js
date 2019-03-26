import React    from "react";
import ReactDOM from "react-dom";
import App   from "./App.js";
//ReactDOM.render(<App />, document.getElementById("root"));

class Conditional extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.state.logged = false;
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    
    logIn() {
        this.setState(p => {
            return {
                logged: true
            }
        });
    }
    
    logOut() {
        this.setState(p => {
            return {
                logged: false
            }
        });
    }
    
    render() {
        return (
            <div>
            {
                this.state.logged ?
                <h1>You are logged in.</h1> :
                <h1>You are logged out.</h1>
            }
            {
                this.state.logged ?
                <button onClick={() => {this.logOut()}}> Log me out </button> :
                <button onClick={() => {this.logIn()}}> Log me in </button>
            }
            </div>
        )
    }
}

ReactDOM.render(<Conditional />, document.getElementById("root"));