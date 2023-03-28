import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import WordsPage from "./pages/WordsPage/WordsPage.jsx";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";

import Array from "./js/arraywords";

function App() {
  let index = localStorage.getItem("cardIndex") || 0;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/words" element={<WordsPage array={Array} />} />
        <Route
          path="/cards"
          element={<CardsPage array={Array} index={Number(index)} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
