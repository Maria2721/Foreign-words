import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.scss";

import main_picture from "../../assets/imgs/studying.png";

function MainPage() {
    const [path, setPath] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if (path !== "") {
            navigate(path);
        }
    }, [path, navigate]);

    return (
        <div className="main container content">
            <div className="main__description">
                <h1 className="main__title">Foreign words</h1>
                <div className="main__text">
                    <p>
                        Данное приложение создано, чтобы помочь всем заинтерисованным в
                        освоении новых языков. Вы можете начать заниматься уже сейчас!
                    </p>
                    <p>
                        Выбирайте подходящую тему и изучайте относящиеся к ней слова, а
                        тренажер с карточками поможет вам проверить усвоенный материал.
                    </p>
                    <p>
                        Давайте скорее приступать!
                    </p>
                </div>
                <div className="main__buttons">
                    <button className="main__buttons_study" onClick={() => setPath("/words")}>Изучать слова</button>
                    <button className="main__buttons_train" onClick={() => setPath("/cards")}>Начать тренировку</button>
                </div>
            </div>
            <div className="main__img">
                <img src={main_picture} alt="girl-study" />
            </div>
        </div>
    );
}

export default MainPage;
