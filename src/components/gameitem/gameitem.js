import React from "react";
import "./Gameitem.css";

const Gameitem = props => (
    <div 
        role = "img"
        aria-label = "Gameitem"
        onClick = {() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
    className={`Gameitem${props.shake ? " shake" : ""}`}
    />
);

export default Gameitem;
