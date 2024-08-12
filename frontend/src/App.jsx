import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // Adjust the import path as needed
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Hero darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </div>
  );
}

export default App;
