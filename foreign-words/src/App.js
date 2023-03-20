import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import WordsPage from "./pages/WordsPage/WordsPage.jsx";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
