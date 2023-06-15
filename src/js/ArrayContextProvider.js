import React, { useState, createContext } from "react";

const ArrayContext = createContext(null);

function ArrayContextProvider(props) {
  const [array, setArray] = useState([
    {
      id: "11346",
      english: "street",
      transcription: "[ stri:t ]",
      russian: "улица",
      tags: "город",
    },
  ]);

  const changeArray = () => {};

  return (
    <ArrayContext.Provider value={{ array, changeArray }}>
      {props.children}
    </ArrayContext.Provider>
  );
}

export { ArrayContextProvider, ArrayContext };
