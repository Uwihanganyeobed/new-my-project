import React, { useState } from "react";
import Navbar from "./components/Navbar";
import State from "./components/hooks/State";
import Toogle from "./components/hooks/Toogle";
import Effect from "./components/hooks/Effect";
import { ThemeContext } from "./components/ThemeContext";
import Reference from "./components/hooks/Reference";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div
        className={`flex ${
          theme === "light" ? "bg-green-400" : "bg-gray-400"
        } w-full flex-col items-center`}
      >
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"element={<Welcome/>} />
          <Route path="/books"element={<Books/>} />
          <Route path="/books/:id"element={<BookDetail/>} />
          <Route path="/add-book"element={<AddBook/>} />
          <Route path="/register"element={<Register/>} />
          <Route path="/login"element={<Login/>} />
          <Route path="*" element={<NotFound/>}/>
          </Routes>
          </BrowserRouter>
        {/* <State />
        <Toogle />
        <Effect />
        <Reference /> */}
      </div>
    </ThemeContext.Provider>
  );
}
