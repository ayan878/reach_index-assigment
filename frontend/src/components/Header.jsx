import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import logo from "../assets/reachinbox_ai_logo.png";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto border-b">
      <div className="flex items-center justify-between h-40 bg-white px-8 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center px-4">
          <h3 className="text-7xl font-bold dark:text-white p-2">Onebox</h3>
        </div>
        <div className="flex items-center pr-8 gap-8 justify-between">
          <button
            className="relative w-28 h-12 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none transition duration-300"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`w-8 h-8 rounded-full absolute -top-2 transform transition-transform duration-500 ${
                darkMode ? "translate-x-12" : "-translate-x-2"
              }`}
            >
              {darkMode ? (
                <FaMoon className="text-white rounded-full h-16 w-16 bg-gray-900 p-2" />
              ) : (
                <IoIosSunny className="text-gray-800 rounded-full h-16 w-16 bg-yellow-300 p-2" />
              )}
            </div>
          </button>
          <div>
            <h1 className="text-5xl font-bold">Eric</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
