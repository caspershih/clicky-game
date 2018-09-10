import React from "react";
import scoreDisplay from "../scoreDisplay";
import "./navbar.css";

const navbar = props => (
    <nav className="navbar">
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

export default navbar;