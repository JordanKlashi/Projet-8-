import React from "react";
import "../style/index.scss";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

import Home from "../Pages/Home.jsx";
import Apropos from "../Pages/Apropos.jsx";
import Erreur from "../Pages/Erreur.jsx";
import Logements from "../Pages/PageLogements.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/Projet-8-/" element={<Home />} />
        <Route path="/Projet-8-/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/Projet-8-/Logements/:id" element={<Logements />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
