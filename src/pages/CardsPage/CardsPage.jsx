import React, { useState, useEffect } from "react";
import "./CardsPage.scss";

import Card from "../../components/Card/Card";
import { ReactComponent as Back } from "../../assets/imgs/back.svg";
import { ReactComponent as Forward } from "../../assets/imgs/forward.svg";

function CardsPage({
    array = [{
        id: "11346",
        english: "street",
        transcription: "[ stri:t ]",
        russian: "улица",
        tags: "город",
    }], index = 0 }
) {
    const [curIndex, setCurIndex] = useState(index);
    const [word, setWord] = useState(array[index]);
    const [translation, setTranslation] = useState(false);

    const handleChange = () => {
        setTranslation(true);
    };

    const handleBack = () => {
        if (array.length === 1) {
            setTranslation(false);
            return;
        } else if (curIndex === 0) {
            setCurIndex(array.length - 1);
            return;
        } else {
            setCurIndex((i) => i - 1);
        }
    };

    const handleForward = () => {
        if (array.length === 1) {
            setTranslation(false);
            return;
        } else if (curIndex === array.length - 1) {
            setCurIndex(0);
            return;
        } else {
            setCurIndex((i) => i + 1);
        }
    };

    const randomArrayElement = (arr) => {
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };

    const newRandWord = () => {
        if (array.length === 1) {
            return;
        }
        let randomWord = randomArrayElement(array);
        while (word.id === randomWord.id) {
            randomWord = randomArrayElement(array);
        }
        let indexOfRandomWord = array.findIndex(x => x.id === randomWord.id);
        setCurIndex(indexOfRandomWord);
    };

    useEffect(() => {
        console.log(`new current index is ${curIndex}`);
        setWord(array[curIndex]);
        setTranslation(false);
        localStorage.setItem("cardIndex", curIndex);
    }, [curIndex]);

    return (
        <div className="cards container">
            <div className="cards__flip">
                <button className="cards__flip_btn" onClick={handleBack}>
                    <Back className="cards__flip_icon" />
                </button>
                <Card
                    key={word.id}
                    tags={word.tags}
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    translation={translation}
                    handleChange={handleChange} />
                <button className="cards__flip_btn" onClick={handleForward}>
                    <Forward className="cards__flip_icon" />
                </button>
            </div>
            <div className="cards__number">
                {curIndex + 1}/{array.length}
            </div>
            <div className="cards__random_btn">
                <button onClick={newRandWord}>Рандомное слово</button>
            </div>
        </div>
    );
}

export default CardsPage;
