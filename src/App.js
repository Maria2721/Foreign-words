import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import * as cn from "classnames";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import WordsPage from "./pages/WordsPage/WordsPage.jsx";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage.jsx";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  let index = localStorage.getItem("cardIndex") || 0;

  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/game" element={<CardsPage index={Number(index)} />} />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
