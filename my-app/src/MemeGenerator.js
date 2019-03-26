import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText   : "",
            bottomText: "",
            imageUsed : "http://i.imgflip.com/1bij.jpg",
            textHandler: this.textHandler,
            newImage: this.newImage
        };
        this.textHandler = this.textHandler.bind(this);
        this.newImage = this.newImage.bind(this);
    }
    
    textHandler(ev) {
        const {name, value} = ev;
        if(name !== "topText" && name !== "bottomText")
            return;
        this.setState({[name]: value});
    }
    
    newImage() {
        this.setState({imageUsed: "http://i.imgflip.com/1bij.jpg"});
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="meme-canvas">
                    <FormInput 
                        textHandler = {(e) => {this.textHandler(e);}}
                        data = {this.state}
                    />
                    <MemeOutput 
                        newImage = {this.newImage}
                        data = {this.state}
                    />
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
    
    changeHandler(ev)
    {
        const {name, value} = ev.target;
        console.log("Name:", name, "Value:", value);
        this.props.textHandler(ev.target);
    }
    
    render() {
        return (
            <form className="meme-form">
                <input 
                    type       = "text"
                    placeholder= "Top Text"
                    name       = "topText"
                    onChange   = {(e) => this.changeHandler(e)}
                    value      = {this.props.data.topText}
                />
                <hr />
                <input 
                    type       = "text"
                    placeholder= "Bottom Text"
                    name       = "bottomText"
                    onChange   = {(e) => this.changeHandler(e)}
                    value      = {this.props.data.bottomText}
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
            <div className="meme-output">
                <img src = {this.props.data.imageUsed} />
                <p className="top-text"> {this.props.data.topText} </p>
                <p className="bottom-text"> {this.props.data.bottomText} </p>
            </div>
        )
    }
}

export default MemeGenerator