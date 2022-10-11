import React from "react";
import "../styles/display2.css";
function Display2(props) {
  return (
    <div className="display2">
      <input
        className="input-display2"
        type="text"
        value={props.value}
      ></input>
    </div>
  );
}

export default Display2;
