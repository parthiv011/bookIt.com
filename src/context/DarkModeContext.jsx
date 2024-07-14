import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

  useEffect(() => {
    if(isDarkMode){
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
    }else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  function ToggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, ToggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error('DarkMode used outside of the DOM tree');
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
