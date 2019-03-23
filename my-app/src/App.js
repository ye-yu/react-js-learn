import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                To-Do List Application
            </header>
        );
    }
}

class MainContent extends Component {
    render() {
        return (
            <div>
                <CheckBoxes state={this.props.state}/>
            </div>
        );
    }
}

class ToDoItem extends Component {
    render() {
        let props = this.props;
        return (
            <div className="todo-item">
                <input 
                  type    ="checkbox" 
                  value   ="Do this 1" 
                  checked ={props.todo.done} 
                  onClick ={(e) => props.toggleDone(props.todo.id)}
                  onChange={(e) => console.log(e)}
                /> 
                <p className={props.todo.done ? "todo-done" : undefined}> 
                    {props.todo.name} 
                </p>
                <p 
                  className="todo-done-message" 
                  style={{ display: !props.todo.done && "none"}}> 
                    Done 
                </p>
            </div>
        );
    }
}

class CheckBoxes extends Component {
    render() {
        let todos = this.props.state.todos;
        const todoComponents = todos.map(item => <ToDoItem key={item.id} todo={item} toggleDone={this.props.state.toggleDone}/>
        );
        return (
            <div className="todo-list">

                {todoComponents}
                
            </div>
        );
    }
}
class Footer extends Component {
    render() {
        return (
            <footer>
                This is a footer
            </footer>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state       = {};
        this.state.todos = [{
                id  : 0,
                name: "Do item 1",
                done: false
            },{
                id  : 1,
                name: "Do item 2",
                done: true
            },{
                id  : 2,
                name: "Do item 3",
                done: false
            }
        ];
        
        this.toggleDone       = this.toggleDone.bind(this);
        this.state.toggleDone = this.toggleDone;
    }
    
    toggleDone(id) {
        console.log("Changed", id);
    }
    render() {
        return (
            <div>
                <Header />
                <MainContent state={this.state}/>
                <Footer />
            </div>
        );
        
    }
}
export default App;
