// ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme, blueTheme } from '../Components/Theme'; // Import the themes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' is the default theme

  const themes = {
    light: lightTheme,
    dark: darkTheme,
    blue: blueTheme,
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'blue';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
