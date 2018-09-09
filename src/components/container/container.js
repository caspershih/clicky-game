import React from "react";
<<<<<<< HEAD
import "./container.css";

const container = props => <main className="container" >{ props.children} </main>
=======

const container = prps =>
    <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
>>>>>>> 282edf72a6e4a26e68a760c3f1be37888c760e68

export default container;
