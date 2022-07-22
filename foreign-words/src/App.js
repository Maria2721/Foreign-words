import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Main from "./components/Main.jsx";
import Listwords from "./components/Listwords.jsx";
import Cardword from "./components/Cardword.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/Header.css";

import logo from "./images/puzzle.png";

import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={"text-link"}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/words"
                className={"text-link"}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Слова
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cards"
                className={"text-link"}
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bolder" : "normal",
                })}
              >
                Карточки
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <button class="toggle-menu">☰</button> */}
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/words" element={<Listwords />} />
        <Route path="/cards" element={<Cardword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
