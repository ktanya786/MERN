import { useState } from "react";
import { ThemeContextProvider } from "./context/theme";
import ThemeBtn from "./component/ThemeBtn";
import { useEffect } from "react";
import Card from "./component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const setLightTheme = () => {
    setThemeMode("light");
  };

  const setDarkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, setLightTheme, setDarkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
