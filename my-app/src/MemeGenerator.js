import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="todo-list">
                    <h1> hello </h1>
                </div>
            </div>
        )
    }
}

function Header() {
    return (
        <div className="navbar">
            Meme Generator
        </div>
    )
}
export default MemeGenerator