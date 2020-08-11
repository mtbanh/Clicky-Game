import React from "react";
import "./navbar.css";

const Navbar= props =>{
    return(
        <div>
            <nav className="navbar fixed-top">
                <h3>The Simpsons Medley</h3>
                <h4>{props.text}</h4>
                <h4>Donut: {props.score} | Top Donut Count : {props.highScore} </h4>
            </nav>
        </div>
    )
}

export default Navbar;