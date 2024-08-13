import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
