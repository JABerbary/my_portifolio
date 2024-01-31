import React from "react";
import ToggleButton from "../../hooks/ToggleButton";

// A button component
function InputToggleDark(props) {
  return <ToggleButton setClassName={props.setClassName} />;
}

export default InputToggleDark;
