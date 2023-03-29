import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NoMatchPage.scss";

import arrow from "../../assets/imgs/arrow.png";

function NoMatchPage() {
    const [path, setPath] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if (path !== "") {
            navigate(path);
        }
    }, [path, navigate]);

    return (
        <div className="noMatch">
            <div className="noMatch__inner">
                <div className="noMatch__btnWrapper">
                    <button className="noMatch__btn" onClick={() => setPath("/")}>
                        Вернуться на главную
                    </button>
                </div>
                <div className="noMatch__imgWrapper">
                    <img src={arrow} alt="arrow" className="noMatch__img" />
                </div>
            </div>
        </div>
    );
}

export default NoMatchPage;
