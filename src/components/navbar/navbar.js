import React from "react";
import ScoreDisplay from "../ScoreDisplay";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li className="simpleItems">
                <a href="/">Blizzard Clicky Game</a>
            </li>
            <li>
                <scoreDisplay score = {props.score} topScore = {props.topScore} />
            </li>
        </ul>
    </nav>
);

export default Navbar;
