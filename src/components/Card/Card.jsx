import React, { useRef, useEffect } from 'react';
import "./Card.scss";

function Card(props) {
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <div className="card card_animate">
            <div className="card__tags">Тема - {props.tags}</div>
            <div className="card__meaning">{props.english}</div>
            <div className="card__transcr">{props.transcription}</div>
            <div className="card__check">
                {props.translation ? props.russian
                    : <button onClick={props.handleChange} ref={buttonRef}>Проверить</button>}
            </div>
        </div>
    );
}

export default Card;
