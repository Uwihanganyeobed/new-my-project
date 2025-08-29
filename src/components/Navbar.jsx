import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Menu, X, User, LogOut } from "lucide-react";
import { ThemeContext } from "./context/ThemeContext";

export default function Navbar() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

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
          
          {/* Protected Routes - Only show if authenticated */}
          {isAuthenticated && (
            <Link to="/add-book" className="hover:underline">Add Book</Link>
          )}
          
          {/* Auth Routes - Only show if not authenticated */}
          {!isAuthenticated && (
            <>
              <Link to="/register" className="hover:underline">Register</Link>
              <Link to="/login" className="hover:underline">Login</Link>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toogleTheme}
            className="ml-4 rounded-md px-3 py-1 bg-white text-black hover:opacity-80"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {/* User Profile Section */}
          {isAuthenticated && (
            <div className="flex items-center space-x-4 ml-4">
              <div className="flex items-center space-x-2 bg-white text-black px-3 py-2 rounded-md">
                <User size={16} />
                <span className="font-medium">{user?.username || user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
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
          
          {/* Protected Routes - Only show if authenticated */}
          {isAuthenticated && (
            <>
              <Link to="/add-book" onClick={() => setOpen(false)}>Add Book</Link>
              <div className="border-t border-gray-300 pt-3 mt-3">
                <div className="flex items-center space-x-2 mb-2">
                  <User size={16} />
                  <span className="font-medium">{user?.username || user?.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 py-1"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </>
          )}
          
          {/* Auth Routes - Only show if not authenticated */}
          {!isAuthenticated && (
            <>
              <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            </>
          )}
          
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
