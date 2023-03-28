import React, { useState, useEffect } from "react";
import * as cn from "classnames";
import "./Oneword.scss";

function Oneword(props) {
    const [edit, setEdit] = useState(false);
    const [word, setWord] = useState({
        mean: `${props.meaning}`,
        transcr: `${props.transcription}`,
        transl: `${props.translation}`,
        sub: `${props.subject}`,
    });
    const [oldWord, setOldWord] = useState({
        mean: "",
        transcr: "",
        transl: "",
        sub: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setWord({
            ...word,
            [name]: value,
        });
    };

    const handleEdit = (e) => {
        setEdit(true);
        setOldWord({
            mean: word.mean,
            transcr: word.transcr,
            transl: word.transl,
            sub: word.sub,
        });
    };

    // more functional in the future => submit newword in bd
    const handleSave = () => {
        setEdit(false);
        setOldWord({
            mean: "",
            transcr: "",
            transl: "",
            sub: "",
        });
    };

    const handleCancelEdit = () => {
        setWord({
            mean: oldWord.mean,
            transcr: oldWord.transcr,
            transl: oldWord.transl,
            sub: oldWord.sub,
        });
        setEdit(false);
    };

    return (
        <div className={cn(props.className, "oneword")} key={props.id}>
            <div>{props.num}</div>
            <div className="oneword__text">
                {edit ? <input
                    type="text"
                    value={word.mean}
                    name="mean"
                    onChange={handleChange}
                    className="oneword__input" />
                    : word.mean}
            </div>
            <div className="oneword__text">
                {edit ? <input
                    type="text"
                    value={word.transcr}
                    name="transcr"
                    onChange={handleChange}
                    className="oneword__input" />
                    : word.transcr}
            </div>
            <div className="oneword__text">
                {edit ? <input
                    type="text"
                    value={word.transl}
                    name="transl"
                    onChange={handleChange}
                    className="oneword__input" />
                    : word.transl}
            </div>
            <div className="oneword__text">
                {edit ? <input
                    type="text"
                    value={word.sub}
                    name="sub"
                    onChange={handleChange}
                    className="oneword__input" />
                    : word.sub}
            </div>
            {edit ?
                <div className="oneword__btn">
                    <button className="oneword__btn_save" onClick={handleSave}></button>
                    <button className="oneword__btn_cancel" onClick={handleCancelEdit}></button>
                </div>
                : <div className="oneword__btn">
                    <button className="oneword__btn_edit" onClick={handleEdit}></button>
                    <button className="oneword__btn_remove"></button>
                </div>}
        </div>
    );
}

export default Oneword;
