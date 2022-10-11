import React from "react";
import "../styles/btn-cont.css";

function ButtonContainer({children}) {
  return <div className="btn-cont">{children}</div>;
}

export default ButtonContainer;
