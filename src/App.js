// App.js
import React, { useEffect, useState } from "react";
import Header from "./view/header/header";
import Footer from "./view/footer/footer";
import InputToggleDark from "./components/inputs/inputToggleDark";
import ToggleButtonLanguage from "./hooks/ToggleButtonLanguage";
import { keepTheme } from "./components/utils/theme";

function App() {
  const [className, setClassName] = useState("theme-dark");
  const [isPT, setIsPT] = useState(true);

  useEffect(() => {
    keepTheme(setClassName);
  }, [className]);

  const handleLanguageToggle = (checked) => {
    setIsPT(checked);
  };

  return (
    <div className={`App ${className}`}>
      <InputToggleDark setClassName={setClassName} />
      <ToggleButtonLanguage
        id="isPT"
        checked={isPT}
        onChange={handleLanguageToggle}
      />
      <Header language={isPT ? "en" : "pt"} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
