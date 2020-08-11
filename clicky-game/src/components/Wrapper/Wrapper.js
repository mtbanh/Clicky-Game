import React from "react";
import "./wrapper.css";

const Wrapper = props =>{
    return(
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;