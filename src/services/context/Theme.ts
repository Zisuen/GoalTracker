import React, {createContext} from 'react';

type THEME = {
  isDark: boolean;
  switchTheme: () => void;
};

export const ThemeContext = createContext<THEME>({
  isDark: true,
  switchTheme: () => {},
});

type THEME_CONTEXT_PROVIDER = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({children}: THEME_CONTEXT_PROVIDER) => {};
