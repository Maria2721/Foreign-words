import React from 'react';
import "./WordsPage.scss";

import Array from '../../js/arraywords.js';
import Oneword from '../../components/Oneword/Oneword.jsx';

function WordsPage() {
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
                        <th><button className='btn-add'></button></th>
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

export default WordsPage;