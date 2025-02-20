import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-700 p-4 text-center">React Router </h1>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
