import React from 'react';

import Array from './arraywords.js';
import Oneword from './Oneword.jsx';

import "../styles/Listwords.css";

function Listwords() {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Значение</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Тема</th>
                        <th><button>Добавить слово</button></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.map((el, index) => (
                        <Oneword
                            num={index + 1}
                            key={el.id}
                            meaning={el.english}
                            transcription={el.transcription}
                            translation={el.russian}
                            subject={el.tags}
                        ></Oneword>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Listwords;