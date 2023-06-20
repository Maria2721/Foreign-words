import React, { useState, useContext } from "react";
import * as cn from "classnames";
import "./Oneword.scss";
import { ArrayContext } from "../../js/ArrayContextProvider";

function Oneword(props) {
    const { setArray } = useContext(ArrayContext);
    const [edit, setEdit] = useState(props.open_edit);
    const [word, setWord] = useState({
        mean: {
            value: props.meaning,
            isDirty: false,
            error: "",
        },
        transcr: {
            value: props.transcription,
            isDirty: false,
            error: "",
        },
        transl: {
            value: props.translation,
            isDirty: false,
            error: "",
        },
        sub: {
            value: props.subject,
            isDirty: false,
            error: "",
        },
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
            [name]: {
                ...word[name],
                value: value,
            },
        });
    };

    const handleEdit = () => {
        setEdit(true);
        setOldWord({
            mean: word.mean.value,
            transcr: word.transcr.value,
            transl: word.transl.value,
            sub: word.sub.value,
        });
    };

    const handleRemove = (event) => {
        let wordId = event.currentTarget.parentNode.parentNode.id;
        setArray((current) =>
            current.filter((obj) => {
                return obj.id !== wordId;
            })
        );
    };

    const handleCancelEdit = (event) => {
        if (props.meaning === "" || props.transcription === "" || props.translation === "" || props.subject === "") {
            event.currentTarget.disabled = true;
        } else {
            event.currentTarget.disabled = false;
            for (let key in oldWord) {
                const name = key;
                const value = oldWord[key];
                setWord((word) => ({
                    ...word,
                    [name]: {
                        ...word[name],
                        value: value,
                        isDirty: false,
                    },
                }));
            }
            setEdit(false);
        }
    };

    const handleSave = (event) => {
        let wordId = event.currentTarget.parentNode.parentNode.id;
        let curValid = validateWord();

        if (curValid === true) {
            setEdit(false);
            setOldWord({
                mean: "",
                transcr: "",
                transl: "",
                sub: "",
            });

            console.log(
                `Значение: ${word.mean.value.trim()}, \n Транскрипция: ${word.transcr.value.trim()}, \n Перевод: ${word.transl.value.trim()}, \n Тема: ${word.sub.value.trim()}`
            );

            setArray((current) =>
                current.map((obj) => {
                    if (obj.id === wordId) {
                        return {
                            ...obj,
                            english: word.mean.value.trim(),
                            russian: word.transl.value.trim(),
                            tags: word.sub.value.trim(),
                            transcription: word.transcr.value.trim(),
                        };
                    }
                    return obj;
                })
            );
        } else {
            console.log("Some inputs not correct!!!");
        }
    };

    // валидация всех полей после нажатия кнопки сохранить
    const validateWord = () => {
        let valid = true;
        for (let key in oldWord) {
            const name = key;
            const value = word[name].value;
            let curError = validationRules(name, value);

            setWord((word) => ({
                ...word,
                [name]: {
                    ...word[name],
                    value: value.trim(),
                    error: curError !== "" ? curError : "",
                    isDirty: curError !== "" ? true : false,
                },
            }));

            if (curError !== "") {
                valid = false;
            }
        }
        return valid;
    };

    // правила, по которым валидируются поля
    const validationRules = (name, val) => {
        const regEn = /^[A-Z\s'-]+$/i;
        const regTr = /^[^А-ЯЁ0-9]+$/i;
        const regOpeningBracket = /^[[]/;
        const regClosingBracket = /]$/;
        const regRus = /^[А-ЯЁ\s'-]+$/i;
        const regSub = /^[A-ZА-ЯЁ\s'_-]+$/i;
        let value = val.trim();
        let error = "";

        switch (name) {
            case "mean":
                if (value.length === 0) {
                    error = "Необходимо заполнить";
                    break;
                }
                if (!regEn.test(value)) {
                    error = "Недопустимые символы";
                    break;
                }
                if (value.length > 45) {
                    error = "Максимум 45 символов";
                    break;
                }
                break;
            case "transcr":
                if (value.length === 0) {
                    error = "Необходимо заполнить";
                    break;
                }
                if (!regOpeningBracket.test(value)) {
                    error = "Добавьте открывающую квадратную скобку в начало строки";
                    break;
                }
                if (!regClosingBracket.test(value)) {
                    error = "Добавьте закрывающую квадратную скобку в конец строки";
                    break;
                }
                if (!regTr.test(value)) {
                    error = "Недопустимые символы";
                    break;
                }
                if (value.length > 45) {
                    error = "Максимум 45 символов";
                    break;
                }
                break;
            case "transl":
                if (value.length === 0) {
                    error = "Необходимо заполнить";
                    break;
                }
                if (!regRus.test(value)) {
                    error = "Недопустимые символы";
                    break;
                }
                if (value.length > 35) {
                    error = "Максимум 35 символов";
                    break;
                }
                break;
            case "sub":
                if (value.length === 0) {
                    error = "Необходимо заполнить";
                    break;
                }
                if (!regSub.test(value)) {
                    error = "Недопустимые символы";
                    break;
                }
                if (value.length > 35) {
                    error = "Максимум 35 символов";
                    break;
                }
                break;
            default:
                error = "";
        }
        return error;
    };

    // при потере фокуса поля ввода происходит его валидация
    const blurHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let curError = validationRules(name, value);

        setWord((word) => ({
            ...word,
            [name]: {
                ...word[name],
                error: curError ? curError : "",
                isDirty: curError ? true : false,
            },
        }));
    };

    // при попадании поля ввода в фокус снимаются все ошибки с этого поля
    const focusHandler = (e) => {
        const name = e.target.name;
        setWord((word) => ({
            ...word,
            [name]: {
                ...word[name],
                error: "",
                isDirty: false,
            },
        }));
    };

    return (
        <div
            className={cn(props.className, "oneword")}
            key={props.id}
            id={props.id}
        >
            <div>{props.num}</div>
            <div className="oneword__text">
                {edit ? (
                    <>
                        {word.mean.error && word.mean.isDirty && (
                            <p className="oneword__text_error">{word.mean.error}</p>
                        )}
                        <input
                            type="text"
                            value={word.mean.value}
                            name="mean"
                            className={cn(
                                "oneword__input",
                                word.mean.isDirty && "oneword__input_error"
                            )}
                            onChange={handleChange}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                    </>
                ) : (
                    word.mean.value
                )}
            </div>
            <div className="oneword__text">
                {edit ? (
                    <>
                        {word.transcr.error && word.transcr.isDirty && (
                            <p className="oneword__text_error">{word.transcr.error}</p>
                        )}
                        <input
                            type="text"
                            value={word.transcr.value}
                            name="transcr"
                            className={cn(
                                "oneword__input",
                                word.transcr.isDirty && "oneword__input_error"
                            )}
                            onChange={handleChange}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                    </>
                ) : (
                    word.transcr.value
                )}
            </div>
            <div className="oneword__text">
                {edit ? (
                    <>
                        {word.transl.error && word.transl.isDirty && (
                            <p className="oneword__text_error">{word.transl.error}</p>
                        )}
                        <input
                            type="text"
                            value={word.transl.value}
                            name="transl"
                            className={cn(
                                "oneword__input",
                                word.transl.isDirty && "oneword__input_error"
                            )}
                            onChange={handleChange}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                    </>
                ) : (
                    word.transl.value
                )}
            </div>
            <div className="oneword__text">
                {edit ? (
                    <>
                        {word.sub.error && word.sub.isDirty && (
                            <p className="oneword__text_error">{word.sub.error}</p>
                        )}
                        <input
                            type="text"
                            value={word.sub.value}
                            name="sub"
                            className={cn(
                                "oneword__input",
                                word.sub.isDirty && "oneword__input_error"
                            )}
                            onChange={handleChange}
                            onBlur={blurHandler}
                            onFocus={focusHandler}
                        />
                    </>
                ) : (
                    word.sub.value
                )}
            </div>
            {edit ? (
                <div className="oneword__btn">
                    <button className="oneword__btn_save" onClick={handleSave}></button>
                    <button
                        className="oneword__btn_cancel"
                        disabled={false}
                        onClick={handleCancelEdit}
                    ></button>
                </div>
            ) : (
                <div className="oneword__btn">
                    <button className="oneword__btn_edit" onClick={handleEdit}></button>
                    <button
                        className="oneword__btn_remove"
                        onClick={handleRemove}
                    ></button>
                </div>
            )}
        </div>
    );
}

export default Oneword;
