import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText   : "",
            bottomText: "",
            imageUsed : "http://i.imgflip.com/1bij.jpg",
            allImages : []
        };
        this.textHandler = this.textHandler.bind(this);
        this.newImage = this.newImage.bind(this);
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(resp => {
                const {success, data} = resp;
                console.log(resp);
                if (success){
                    this.setState({allImages: data.memes.map((e) => {return e.url;})});                    
                } else {
                    this.setState({allImages: ["http://i.imgflip.com/1bij.jpg"]});
                }
            });
    }
    textHandler(ev) {
        const {name, value} = ev;
        if(name !== "topText" && name !== "bottomText")
            return;
        this.setState({[name]: value});
    }
    
    newImage() {
        const length    = this.state.allImages.length;
        const index     = Math.floor(Math.random() * length) % length;
        const imageUsed = this.state.allImages[index];
        this.setState({imageUsed: imageUsed});
    }
    render() {
        console.log(this.state.allImages);
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
            <div>
                <div className="meme-output">
                    <img src = {this.props.data.imageUsed} alt="meme background"/>
                    <p className="top-text"> {this.props.data.topText} </p>
                    <p className="bottom-text"> {this.props.data.bottomText} </p>
                </div>
                <div>
                    <button onClick={(e) => {this.props.newImage(e)}}> Refresh </button>
                </div>
            </div>
        )
    }
}

export default MemeGenerator