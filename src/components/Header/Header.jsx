import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import logo from "../../assets/imgs/foreign-language.png";

function Header() {
    return (
        <header className="header container">
            <NavLink to="/">
                <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bolder" : "normal",
                    })}
                >
                    Главная
                </NavLink>
                <NavLink
                    to="/words"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bolder" : "normal",
                    })}
                >
                    Слова
                </NavLink>
                <NavLink
                    to="/cards"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bolder" : "normal",
                    })}
                >
                    Карточки
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
