import React from "react";
import logo from "../assets/reachinbox_ai_logo.png";

function Sidebar({ darkMode, setDarkMode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="hidden md:flex flex-col w-44 bg-gray-800 dark:bg-gray-700">
        <div className="flex items-center justify-center p-4 mt-8">
          <img src={logo} className="w-24 h-24" alt="logo" />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800 dark:bg-gray-700">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-600"
            >
              {/* Icon 1 */}
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-600"
            >
              {/* Icon 2 */}
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-600"
            >
              {/* Icon 3 */}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
