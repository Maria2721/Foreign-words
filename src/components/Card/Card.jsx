import React from "react";
import "./Card.scss";

function Card(props) {
    return (
        <div className="card card_animate">
            <div className="card__tags">Тема - {props.tags}</div>
            <div className="card__meaning">{props.english}</div>
            <div className="card__transcr">{props.transcription}</div>
            <div className="card__check">
                {props.translation ? props.russian
                    : <button onClick={props.handleChange}>Проверить</button>}
            </div>
        </div>
    );
}

export default Card;
