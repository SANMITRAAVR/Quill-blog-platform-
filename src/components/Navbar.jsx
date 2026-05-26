import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const [darkMode, setDarkMode] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser, logout } =
    useContext(AuthContext);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);

  return (
    <nav className="border-b border-gray-800 dark:bg-black bg-white transition">

      <div className="flex items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          Quill
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white transition"
          >
            Write
          </Link>

          {/* Logged In User */}
          {currentUser ? (

            <>
              <div className="bg-white/10 px-4 py-2 rounded-xl text-white">

                👤 {currentUser.username}

              </div>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white transition"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link
                to="/login"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                Register
              </Link>
            </>

          )}

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-4 py-2 rounded-xl"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-black text-white">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-500 px-4 py-3 rounded-xl text-center"
          >
            Write
          </Link>

          {/* User Section */}
          {currentUser ? (

            <>
              <div className="bg-white/10 px-4 py-3 rounded-xl">

                👤 {currentUser.username}

              </div>

              <button
                onClick={logout}
                className="bg-red-500 px-4 py-3 rounded-xl"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>

          )}

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-4 py-3 rounded-xl"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>

      )}

    </nav>
  );
}

export default Navbar;