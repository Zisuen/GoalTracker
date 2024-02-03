import React, {createContext, useState} from 'react';
import {dark, light, THEME} from '~/config/theme/theme';

type THEME_CONTEXT = {
  isDark: boolean;
  theme: THEME;
  switchTheme: () => void;
};

export const ThemeContext = createContext<THEME_CONTEXT>({
  isDark: true,
  theme: dark,
  switchTheme: () => {},
});

type THEME_CONTEXT_PROVIDER = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({children}: THEME_CONTEXT_PROVIDER) => {
  const [theme, setTheme] = useState(dark);
  const [isDark, setIsDark] = useState(true);
  const switchTheme = () => {
    if (isDark) {
      setTheme(light);
      setIsDark(false);
    }
    if (!isDark) {
      setTheme(dark);
      setIsDark(true);
    }
  };
  const value: THEME_CONTEXT = {
    isDark,
    theme,
    switchTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
