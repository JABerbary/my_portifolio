import Header from "./view/header/header";
import Footer from "./view/footer/footer";
import InputToggleDark from "./components/inputs/inputToggleDark";
import InputToggleLanguage from "./hooks/ToggleButtonLanguage";
import { keepTheme } from "./components/utils/theme";
import React, { useEffect, useState } from "react";

function App() {
  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName);
  }, [setClassName]);
  useEffect(() => {
    keepTheme(setlanguage);
  }, [setClassLanguage]);
  return (
    <div className={`App ${className}`}>
      <InputToggleDark setClassName={setClassName} />
      <InputToggleLanguage setlanguage={setlanguage} />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
