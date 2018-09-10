import React from "react";
import navMessage from "";
import "./navbar.css";

const nav = props => (
    <nav className="nav">
        <ul>
            <li className="simpleItems">
                <a href="/">Blizzard Clicky Game</a>
            </li>
            <li>
                Score: {props.score} Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default nav;