'use client'
import { createContext, useState } from "react";

// Create our theme context using React.CreateContext()
export const ThemeContext = createContext();

// // Create a custom hook that allows easy access to our ThemeContext values
// export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({children}) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    // Dark theme and toggle theme are getting provided to the child components
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
