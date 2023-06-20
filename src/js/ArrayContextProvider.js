import React, { useState, createContext, useEffect } from "react";

const ArrayContext = createContext(null);

function ArrayContextProvider(props) {
  const [array, setArray] = useState([]);

  // при изменении в массиве, асинхронно отправляются данные на сервер без повторного рендеринга !!!
  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <ArrayContext.Provider value={{ array, setArray }}>
      {props.children}
    </ArrayContext.Provider>
  );
}

export { ArrayContextProvider, ArrayContext };
