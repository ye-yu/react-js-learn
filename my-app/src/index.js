import React    from "react";
import ReactDOM from "react-dom";

function MyInfo()
{
    let code = (
    <div class="basic-info">
        <h1> Sam Programmer </h1>
        <p>
            bluergh
        </p>
        <ul>
            <li> i have put this inside a function </li>
            <li> this is a </li>
            <li> list </li>
        </ul>
    </div>
    );
    return code;
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));