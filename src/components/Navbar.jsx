import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800 dark:bg-black bg-white transition">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-blue-500"
      >
        Quill
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          Home
        </Link>

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

        <Link
          to="/create"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white transition"
        >
          Write
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 text-white px-4 py-2 rounded-xl"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;