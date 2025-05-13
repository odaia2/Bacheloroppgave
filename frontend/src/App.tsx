// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Questionnaire from "./components/Questionnaire";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Layout from "./components/Layout";
import Header from "./components/Header";
import RoleSelect from "./components/RoleSelect";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<><Header /><HomePage /></>} />
          <Route path="/velg-rolle" element={<RoleSelect />} />
          <Route path="/questions" element={<Questionnaire />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
