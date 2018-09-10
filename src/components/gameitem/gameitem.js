import React from "react";
import "./gameitem.css";

const gameitem = props => (
    <div 
        role = "img"
        aria-label = "game item"
        onClick = { () => props.handleClick(props.id) }
    />
);

export default gameitem;
