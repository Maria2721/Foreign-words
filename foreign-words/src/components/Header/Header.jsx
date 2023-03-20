import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.scss";

import logo from "../../assets/imgs/puzzle.png";

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
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
        </header>
    )
}

export default Header