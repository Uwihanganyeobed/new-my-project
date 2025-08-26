import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { Menu, X } from "lucide-react"; // install lucide-react

export default function Navbar() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`w-full shadow-md ${
        theme === "light" ? "bg-green-500 text-white" : "bg-gray-800 text-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyLibrary
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/books" className="hover:underline">Books</Link>
          <Link to="/add-book" className="hover:underline">Add Book</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <button
            onClick={toogleTheme}
            className="ml-4 rounded-md px-3 py-1 bg-white text-black hover:opacity-80"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-3 px-6 pb-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/books" onClick={() => setOpen(false)}>Books</Link>
          <Link to="/add-book" onClick={() => setOpen(false)}>Add Book</Link>
          <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          <button
            onClick={toogleTheme}
            className="rounded-md px-3 py-1 bg-white text-black hover:opacity-80"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      )}
    </nav>
  );
}
