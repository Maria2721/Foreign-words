import React from "react";
import "./WordsPage.scss";

import Array from "../../js/arraywords.js";
import Oneword from "../../components/Oneword/Oneword.jsx";

function WordsPage() {
    return (
        <div className="words container">
            <div className="words__inner">
                <div className="words__parameters">
                    <div>№</div>
                    <div>Значение</div>
                    <div>Транскрипция</div>
                    <div>Перевод</div>
                    <div>Тема</div>
                    <button className="words__btn_add"></button>
                </div>
                {Array.map((el, index) => (
                    <Oneword
                        key={el.id}
                        num={index + 1}
                        meaning={el.english}
                        transcription={el.transcription}
                        translation={el.russian}
                        subject={el.tags}
                        className="words__parameters"
                    ></Oneword>
                ))}
            </div>
        </div>
    );
}

export default WordsPage;
