import React, { useState } from "react";
import "./CardsPage.scss";

import Array from "../../js/arraywords";

function CardsPage() {
    const [word, setWord] = useState(Array[0]);
    const [translation, setTranslation] = useState(false);

    const handleChange = () => {
        setTranslation(true);
    };

    const arrayRandElement = (arr) => {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };

    const newWord = () => {
        let randomword = arrayRandElement(Array);
        while (word.id === randomword.id) {
            randomword = arrayRandElement(Array);
        }
        setWord(randomword);
        setTranslation(false);
    };

    return (
        <div className="cards container">
            <div className="cards__word">
                <div className="cards__word__tags">Тема - {word.tags}</div>
                <div className="cards__word__meaning">{word.english}</div>
                <div className="cards__word__transcr">{word.transcription}</div>
                <div className="cards__word__check">
                    {translation ? word.russian
                        : <button onClick={handleChange}>Проверить</button>}
                </div>
            </div>
            <div className="cards__button">
                <button onClick={newWord}>Новое слово</button>
            </div>
        </div>
    );
}

export default CardsPage;
