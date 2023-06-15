import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import * as cn from "classnames";
import "./App.scss";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import WordsPage from "./pages/WordsPage/WordsPage.jsx";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage.jsx";

import { ArrayContext } from "./js/ArrayContextProvider";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const { array, setArray } = useContext(ArrayContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let index = localStorage.getItem("cardIndex") || 0;

  useEffect(() => {
    setIsLoading((prev) => !prev); // true

    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setArray(response);
        setIsLoading((prev) => !prev); // false
      })
      .catch((error) => {
        setError(error);
        setIsLoading((prev) => !prev); // false
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/words"
            element={
              error ? (
                <div className="container content">{error.message}</div>
              ) : isLoading ? (
                <div className="container content">Loading ...</div>
              ) : (
                <WordsPage />
              )
            }
          />
          <Route
            path="/game"
            element={
              error ? (
                <div className="container content">{error.message}</div>
              ) : isLoading ? (
                <div className="container content">Loading ...</div>
              ) : (
                <CardsPage index={Number(index)} />
              )
            }
          />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
