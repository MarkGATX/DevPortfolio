'use client'
import { useState, useEffect } from 'react';

export default function ThemeWrapper({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  // Prevents the app from rendering on the server
  if (!hasMounted) {
    return null;
  }

  return (
    <html lang="en" data-theme={isDarkMode ? 'dark' : 'light'} className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}