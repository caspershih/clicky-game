import React from "react";
import "./Gameitem.css";

const Gameitem = props => (
    <div 
        className={`Gameitem${props.shake ? " shake" : ""}`}
        role = "img"
        aria-label = "Game item"
        onClick = {() => props.itemClicked(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
    />
);

export default Gameitem;
