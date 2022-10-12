import React from "react";
import "../styles/button.css"
function Button (props) {


    return (
        <input 
        className="btn"
        type="button"
        name={props.name}
        value={props.label}
        id={props.id}
        onClick={props.onClick}
        />
    )
}

export default Button;