import React from "react";
import "./Gameitem.css";

const Gameitem = props => (
    <div 
        role = "img"
        aria-label = "Game item"
        onClick = {() => props.itemClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={`Gameitem${props.shake ? " shake" : ""}`}
    />
);

export default Gameitem;
