// ToggleButton.js
import React, { useState } from "react";
import "../styles/scss/inputToggleButton.scss";

const ToggleButtonLanguage = ({ onChange }) => {
  const [isPT, setIsPT] = useState(true);

  const handleToggle = () => {
    setIsPT((prev) => !prev);
    onChange && onChange(!isPT);
  };

  return (
    <div className="toggleButton" onClick={handleToggle}>
      <div className={`${"switch"} ${isPT ? "pt" : "en"}`}>
        {isPT ? "PT" : "EN"}
      </div>
    </div>
  );
};

export default ToggleButtonLanguage;
