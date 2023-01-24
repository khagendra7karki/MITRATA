// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/signin" element={<Login/>}>
          </Route>
          <Route path="/reset" element = {<PasswordReset/>}>   
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
        </Routes>
    </Router>
  );
}

