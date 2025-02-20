import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Curd/Home";
import AddUser from "./Curd/AddUser";
import EditUser from "./Curd/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addUser" element={<AddUser />}></Route>
        <Route path="/editUser/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
