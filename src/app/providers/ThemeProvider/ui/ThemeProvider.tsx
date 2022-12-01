import React, {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
  children?: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProp = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProp}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
