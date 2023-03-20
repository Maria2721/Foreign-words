import React, { useState, useEffect } from 'react';

import "./Oneword.scss";

function Oneword(props) {
    const [edit, setEdit] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [word, setWord] = useState({
        mean: `${props.meaning}`,
        transcr: `${props.transcription}`,
        transl: `${props.translation}`,
        sub: `${props.subject}`,
    })
    const [oldWord, setOldWord] = useState({
        mean: '',
        transcr: '',
        transl: '',
        sub: '',
    })

    const handleEdit = (e) => {
        setEdit(!edit);
        setCancel(false);
        setOldWord({
            mean: word.mean,
            transcr: word.transcr,
            transl: word.transl,
            sub: word.sub,
        })
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setWord({
            ...word,
            [name]: value
        })
    }

    // more functional in the future => submit newword in bd
    const handleSave = () => {
        setEdit(!edit);
        setOldWord({
            mean: '',
            transcr: '',
            transl: '',
            sub: '',
        })
    }

    const handleСancelEdit = () => {
        setCancel(true);
        setEdit(!edit);
    }

    useEffect(() => {
        if (cancel == false) {
            return;
        }
        setWord({
            mean: oldWord.mean,
            transcr: oldWord.transcr,
            transl: oldWord.transl,
            sub: oldWord.sub,
        })
    }, [cancel])

    return (
        <tr key={props.id} value={props.id}>
            <td className='number'>{props.num}</td>
            <td>{edit ? <input type="text" value={word.mean} name="mean" onChange={handleChange} /> : word.mean}</td>
            <td>{edit ? <input type="text" value={word.transcr} name="transcr" onChange={handleChange} /> : word.transcr}</td>
            <td>{edit ? <input type="text" value={word.transl} name="transl" onChange={handleChange} /> : word.transl}</td>
            <td>{edit ? <input type="text" value={word.sub} name="sub" onChange={handleChange} /> : word.sub}</td>
            {edit ? <td className='buttons'><button className="btn-save" onClick={handleSave}></button><button className="btn-cancel" onClick={handleСancelEdit}></button></td> :
                <td className='buttons'><button className="btn-edit" onClick={handleEdit}></button><button className="btn-bin"></button></td>
            }
        </tr >
    )
}

export default Oneword;