import React from "react";
import "./Gameitem.css";

const Gameitem = props => (
    <div 
        className= "imgs"
        key={props.id}
        role = "img"
        aria-label = "Game item"
        onClick = {() => props.itemClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}>

        <img
            id={props.id}
            src={props.image}
        />

        </div>

    
);

export default Gameitem;
