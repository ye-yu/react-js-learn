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

function ToDoItem()
{
    return (
        <div className="todo-item">
            <input type="checkbox" value="Do this 1" /> 
            <p> Do this 1 </p>
        </div>
    );
}
function CheckBoxes()
{
    
    return (
        <div className="todo-list">

            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            
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
