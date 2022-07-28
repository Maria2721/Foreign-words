import React, { useState } from 'react';

import "../styles/Listwords.css";

function Oneword(props) {
    const [edit, setEdit] = useState(true);

    return (
        <tr key={props.id}>
            <td className='number'>{props.num}</td>
            <td>{props.meaning}</td>
            <td>{props.transcription}</td>
            <td>{props.translation}</td>
            <td>{props.subject}</td>
            {edit ? <td className='buttons'><button className="btn-edit"></button><button className="btn-bin"></button></td> :
                <td className='buttons'><button className="btn-save"></button><button className="btn-cancel"></button></td>}
        </tr>
    )
}

export default Oneword;