import React from 'react';

import "../styles/Main.css";

import main_picture from '../images/studying.png';

function Main() {
    return (
        <div className='main'>
            <div className='main-text'>
                <h1>Приветствую Вас!</h1>
                <p>Данное приложение создано, чтобы помочь всем заинтерисованным в освоении новых языков. Ты можешь начать заниматься уже сейчас! Выбирай подходящую тему и запоминай относящиеся к ней слова, а наш тренажер с карточками с радостью поможет проверить усвоенный материал.</p>
                <div>Давай скорее приступать!</div>
                <div className='start-train'><button className='btn-learn'>Изучать слова</button><button className='btn-train'>Начать тренировку</button></div>
            </div>
            <div className='main-picture'>
                <img src={main_picture} alt='girl-study'></img>
            </div>
        </div>
    )
}

export default Main;