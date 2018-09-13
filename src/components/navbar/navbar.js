import React from "react";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import "./Navbar.css";

const Navbar = props => (
    <nav className="Navbar">
        <ul>
            <li className="simpleItems">
                <a href="/">Blizzard Clicky Game</a>
            </li>
            <li>
                <ScoreDisplay score = {props.score} topScore = {props.topScore} />
            </li>
        </ul>
    </nav>
);

export default Navbar;
