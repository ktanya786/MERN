import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  setDarkTheme: () => {},
  setLightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
