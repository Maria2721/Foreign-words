import React, { useState, createContext } from "react";

const ArrayContext = createContext(null);

function ArrayContextProvider(props) {
  const [array, setArray] = useState([]);

  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      {props.children}
    </ArrayContext.Provider>
  );
}

export { ArrayContextProvider, ArrayContext };
