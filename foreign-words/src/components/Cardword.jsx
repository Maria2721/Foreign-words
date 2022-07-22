import React from 'react';

import Array from './arraywords';

import "../styles/Cardword.css";

function Cardword() {
    function arrayRandElement(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    let el = 0;

    function newWord() {
        el = arrayRandElement(Array);
    }

    return (
        <div className='card-train'>
            <button onClick={newWord()}>Новое слово</button>

            <p>Тема - {el.tags}</p>
            <p>{el.english}</p>
            <p>{el.transcription}</p>
            <p>{el.russian}</p>
        </div>
    )
}

export default Cardword;