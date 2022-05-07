import React, { createContext, useState, useContext } from "react";

export const MainContext = createContext({
  isShownHeader: false,
  darkMode: false,
  onChangeShownHeaderHandler: () => {},
  changeDarkModeHandler: () => {},
});

export const useMainContext = () => {
  const context = useContext(MainContext);

  return context;
};

export const MainContextProvider = (props) => {
  const [isShownHeader, setIsShownHeader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const onChangeShownHeaderHandler = () => {
    setIsShownHeader((oldState) => !oldState);
  };

  const changeDarkModeHandler = () => {
    setDarkMode((oldState) => !oldState);
  };

  return (
    <MainContext.Provider
      value={{
        isShownHeader,
        darkMode,
        onChangeShownHeaderHandler,
        changeDarkModeHandler,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
