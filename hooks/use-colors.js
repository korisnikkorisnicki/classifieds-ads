import React from "react";
import { useMainContext } from "../context/main-context";

const useColors = () => {
  const { darkMode } = useMainContext();

  if (!darkMode) {
    return {
      colors: {
        primary: "#455073",
        accent: "#c0904d",
        drawer: "#6077c0",
        stackBackground: "#d8dbe6",
        drawerActiveBackground: "#304583",
        disabled: "#bbbbbb",
        location: "#a9a9a9",
        primaryLight: "#e2e5ee",
        primaryDark: "#394260",
        accentDark: "#aa7c3c",
      },
    };
  }

  return {
    colors: {
      primary: "#455073",
      accent: "#c0904d",
      drawer: "#6077c0",
      stackBackground: "#d8dbe6",
      drawerActiveBackground: "#304583",
      disabled: "#bbbbbb",
      location: "#a9a9a9",
      primaryLight: "#e2e5ee",
      primaryDark: "#394260",
      accentDark: "#aa7c3c",
    },
  };
};

export default useColors;
