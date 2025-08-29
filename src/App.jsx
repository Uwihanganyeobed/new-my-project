import React, { useState } from "react";
import Navbar from "./components/Navbar";
import State from "./components/hooks/State";
import Toogle from "./components/hooks/Toogle";
import Effect from "./components/hooks/Effect";
import Reference from "./components/hooks/Reference";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/book-management/Welcome";
import Books from "./components/book-management/Books";
import BookDetail from "./components/book-management/BookDetail";
import AddBook from "./components/book-management/AddBook";
import Register from "./components/book-management/Register";
import Login from "./components/book-management/Login";
import NotFound from "./components/NotFound";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { ThemeContext } from "./components/context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <div
          className={`flex ${
            theme === "light" ? "bg-green-400" : "bg-gray-400"
          } w-full flex-col justify-center items-center`}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookDetail />} />

              <Route
                path="/add-book"
                element={
                  <ProtectedRoute>
                    <AddBook />
                  </ProtectedRoute>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          {/* <State />
        <Toogle />
        <Effect />
        <Reference /> */}
        </div>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}
