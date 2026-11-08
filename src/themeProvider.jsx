import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const getInitialDarkMode = () => {
  try {
    const saved = localStorage.getItem("portfolio-dark-mode");
    if (saved !== null) return saved === "true";
  } catch (e) {
    // ignore storage errors
  }
  return true;
};

const initialState = { darkMode: getInitialDarkMode() };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-dark-mode", String(state.darkMode));
    } catch (e) {
      // ignore storage errors
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
