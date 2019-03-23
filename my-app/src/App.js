import React from 'react';

function Header() {
    return (
        <header className="navbar">
            To-Do List Application
        </header>
    );
}

function MainContent() {
    return (
        <div>
            <CheckBoxes />
        </div>
    );
}

function ToDoItem(props)
{
    return (
        <div className="todo-item">
            <input type="checkbox" value="Do this 1" /> 
            <p className={props.todo.done && "todo-done"}> 
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
function CheckBoxes()
{
    
    return (
        <div className="todo-list">

            <ToDoItem 
                todo = {{
                    
                    name: "Do item 1",
                    done: false
                }}
            />
            <ToDoItem 
                todo = {{
                    
                    name: "Do item 2",
                    done: true
                }}
            />
            <ToDoItem 
                todo = {{
                    
                    name: "Do item 3",
                    done: false
                }}
            />
            
        </div>
    );
}

function Footer() {
    return (
        <footer>
            This is a footer
        </footer>
    );
}

function App(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
