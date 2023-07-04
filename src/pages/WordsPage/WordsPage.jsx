import React, { useContext } from "react";
import "./WordsPage.scss";

import Oneword from "../../components/Oneword/Oneword.jsx";
import { ArrayContext } from "../../js/ArrayContextProvider";

import { ReactComponent as ToTop } from "../../assets/imgs/arrow_to_top.svg";

function WordsPage() {
    const { array, setArray } = useContext(ArrayContext);

    const handleAdd = () => {
        // предполагается, что массив отсортирован по номеру id !!!
        let lastId = array[array.length - 1].id;
        let nextId = Number(lastId) + 1;
        let obj = {
            id: String(nextId),
            english: "",
            transcription: "",
            russian: "",
            tags: "",
            tags_json: "",
        };
        setArray(current => [...current, obj]);
        scrollToBottom();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="words container content">
            <div className="words__inner">
                <div className="words__parameters">
                    <div>№</div>
                    <div>Значение</div>
                    <div>Транскрипция</div>
                    <div>Перевод</div>
                    <div>Тема</div>
                    <button className="words__btn_add" onClick={handleAdd}></button>
                </div>
                {array.map((el, index) => (
                    <Oneword
                        key={el?.id}
                        id={el?.id}
                        num={index + 1}
                        meaning={el?.english}
                        transcription={el?.transcription}
                        translation={el?.russian}
                        subject={el?.tags}
                        className="words__parameters"
                        open_edit={el?.english === "" ? true : false}
                    ></Oneword>
                ))}
            </div>
            <button className="words__scroll_btn" onClick={scrollToTop}>
                <ToTop className="words__scroll_icon" />
            </button>
        </div>
    );
}

export default WordsPage;
