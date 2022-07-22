import React from 'react';

import "../styles/Listwords.css";

function Oneword(props) {
    return (
        <tr key={props.id}>
            <td>{props.num}</td>
            <td>{props.meaning}</td>
            <td>{props.transcription}</td>
            <td>{props.translation}</td>
            <td>{props.subject}</td>
            <td className='buttons'><button className="edit"></button><button className="bin"></button></td>
        </tr>
    )
}

export default Oneword;