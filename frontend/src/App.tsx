import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./Style/Style.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<><Header /><HomePage /></>} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;