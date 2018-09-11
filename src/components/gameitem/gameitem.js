import React from "react";
import "./Gameitem.css";

const Gameitem = props => (
    <div 
        role = "img"
        aria-label = "Game item"
        onClick = { () => props.handleClick(props.id) }
    />
);

export default Gameitem;
