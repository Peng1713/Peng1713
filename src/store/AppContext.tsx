import React, { createContext, useContext } from 'react';
import { useAuth } from './useAuthStore';
import { useSettings } from './useSettingsStore';
import type { ThemeMode, NavPosition } from './useSettingsStore';

interface AppContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  themeMode: ThemeMode;
  navPosition: NavPosition;
  toggleTheme: () => void;
  toggleNavPosition: () => void;
  setNavPosition: (pos: NavPosition) => void;
}

const AppContext = createContext<AppContextType>(null!);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const settings = useSettings();

  return (
    <AppContext.Provider value={{ ...auth, ...settings }}>
      {children}
    </AppContext.Provider>
  );
};
