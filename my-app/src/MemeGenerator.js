import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText   : "",
            bottomText: "",
            imageUsed : "http://i.imgflip.com/1bij.jpg"
        };
    }
    
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="meme-canvas">
                    <FormInput />
                    <MemeOutput />
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

class FormInput extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    changeHandler(event) {
        const {name, value} = event;
        console.log("Name:", name, "Value:", value);
    }
    render() {
        return (
            <form className="meme-form">
                <input 
                    type       = "text"
                    placeholder= "Top Text"
                    name       = "topText"
                    onChange   = {this.changeHandler}
                />
                <br />
                <input 
                    type       = "text"
                    placeholder= "Bottom Text"
                    name       = "bottomText"
                    onChange   = {this.changeHandler}
                />
            </form>
        )
    }
}

class MemeOutput extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (
            <div>
            
            </div>
        )
    }
}

export default MemeGenerator