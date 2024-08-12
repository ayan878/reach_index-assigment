import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

function Hero({darkMode, setDarkMode}) {
  return (
    <div>
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
                  darkMode
                    ? "translate-x-8"
                    : "-translate-x-1"
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

export default Hero;
