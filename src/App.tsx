import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/login/page";
import SignUp from "./Pages/auth/signup/page";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} /> 
        <Route path="/signup" element={<SignUp />} /> {/* Corrected this line */}
      </Routes>
    </Router>
  );
};

