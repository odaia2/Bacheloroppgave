import React from "react";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./Style/Style.css"; // Importerer CSS

function App() {
  return (
    <>
      <Nav />
      <Header />
      <HomePage />
    </>
  );
}

export default App;