import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } flex flex-col h-screen border-dark-primary dark:border-light-primary border-[3px]`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Main />
    </div>
  );
}

export default App;
