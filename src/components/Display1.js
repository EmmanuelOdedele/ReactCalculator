import React from "react";
import "../styles/display1.css";
function Display1(props) {
  return (
    <div className="display1">
      <input
        className="input-display1"
        type="text"
        value={props.value}
      ></input>
    </div>
  );
}

export default Display1;
