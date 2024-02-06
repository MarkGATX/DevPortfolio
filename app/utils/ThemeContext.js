'use client'
import React, { useState, createContext, useContext } from 'react';


// Initialize new context for menu
export const ThemeContext = createContext();

// We create a custom hook to provide immediate usage of the theme context in other components
export const useThemeContext = () => useContext(ThemeContext);

// ThemeProvider component that holds initial state, returns provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }


  // Provider components expect a value prop to be passed
  return (
    <ThemeContext.Provider value={{toggleDarkMode, isDarkMode, setIsDarkMode}}>
      {/* Render children passed from props */}
      {children}
    </ThemeContext.Provider>
  );
};
