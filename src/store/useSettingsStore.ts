import { useState, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark';
export type NavPosition = 'side' | 'top';

const THEME_KEY = 'app_theme';
const NAV_KEY = 'app_nav_position';

export function useSettings() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    () => (localStorage.getItem(THEME_KEY) as ThemeMode) || 'light'
  );
  const [navPosition, setNavPositionState] = useState<NavPosition>(
    () => (localStorage.getItem(NAV_KEY) as NavPosition) || 'side'
  );

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  const toggleNavPosition = useCallback(() => {
    setNavPositionState((prev) => {
      const next = prev === 'side' ? 'top' : 'side';
      localStorage.setItem(NAV_KEY, next);
      return next;
    });
  }, []);

  const setNavPosition = useCallback((pos: NavPosition) => {
    localStorage.setItem(NAV_KEY, pos);
    setNavPositionState(pos);
  }, []);

  return { themeMode, navPosition, toggleTheme, toggleNavPosition, setNavPosition };
}
