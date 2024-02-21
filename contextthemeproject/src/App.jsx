import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./context/components/ThemeBtn";
import Cards from "./context/components/Cards";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in the theme actually we just have to change the values in the html class attribute
  // if it contains dark and change to light doing this it will whole theme color
  //  this is how only tailwind dark and light css mode works

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");

    // whatever will be the theme mode set that only
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    // this is the themeProvider which we ahve exported but here we have give values here also
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Cards />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
