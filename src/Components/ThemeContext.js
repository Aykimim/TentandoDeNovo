import React, { createContext, useContext, useState } from 'react';
import { colors } from '../Components/Theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    ...colors, // Use as cores padrão
    darkMode: false, // Adicione uma flag para indicar o modo escuro
  });

  const toggleDarkMode = () => {
    setTheme((prevTheme) => ({ ...prevTheme, darkMode: !prevTheme.darkMode }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser utilizado dentro de um ThemeProvider');
  }
  return context;
};
