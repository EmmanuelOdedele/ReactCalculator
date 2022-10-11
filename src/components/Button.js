import React from "react";
import "../styles/button.css"
function Button (props) {


    return (
        <input 
        type="button"
        value={props.label}
        id={props.id}
        onClick={props.onClick}
        />
    )
}

export default Button;