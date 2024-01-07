import React from "react";
import "../style/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

import Home from "../Pages/Home.jsx";
import Apropos from "../Pages/Apropos.jsx";
import Erreur from "../Pages/Erreur.jsx";
import Logements from "../Pages/PageLogements.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Erreur" element={<Erreur />} />
        <Route path="/Logements/:id" element={<Logements />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
