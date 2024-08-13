// import React, { useContext } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { ThemeContext } from "../App"; 

// function Layout() {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);

//   return (
//     <div className={`flex grid-cols-2 w-full ${darkMode ? "dark" : ""}`}>
//       <Sidebar />
//       <Header />
//     </div>
//   );
// }

// export default Layout;

import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ThemeContext } from "../main";


function Layout() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`flex grid-cols-2 w-full ${darkMode ? "dark" : ""}`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Layout;
