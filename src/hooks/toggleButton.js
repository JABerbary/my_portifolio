import React, { useState } from "react";
import styles from "../Styles/scss/inputToggleButton.module.scss";

// A button component
export default function ToggleButton({ toggled, onClick }) {
  const [isToggle, toggle] = useState(false);
  const callback = () => {
    toggle(!isToggle);
    onClick(!isToggle);
  };
  return (
    <label className={`${styles.switch}`}>
      teste
      <input
        type="checkbox"
        defaultChecked={isToggle}
        onClick={callback}
      ></input>
      <span className={`${styles.slider}`}></span>
    </label>
  );
}
