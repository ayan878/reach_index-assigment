import React from "react";
import logo from "../assets/reachinbox_ai_logo.png";
import Hero from "./Hero";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

function Sidebar({ darkMode, setDarkMode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-14 bg-gray-800 dark:bg-gray-700">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <img src={logo} className="w-8" alt="logo" />
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
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-4">
            <h3 className="text-2xl font-bold dark:text-white">Onebox</h3>
          </div>
          <div className="flex items-center pr-4">
            <button
              className="relative w-16 h-6 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none transition duration-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`w-8 h-8 rounded-full absolute -top-1 transform transition-transform duration-500 ${
                  darkMode ? "translate-x-8" : "-translate-x-1"
                }`}
              >
                {darkMode ? (
                  <FaMoon className="text-gray-800 rounded-full h-8 w-8 bg-white p-2" />
                ) : (
                  <IoIosSunny className="text-gray-800 rounded-full h-8 w-8 bg-yellow-300 p-2" />
                )}
              </div>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold dark:text-white">
            Welcome to my dashboard!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This is an example dashboard using Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
