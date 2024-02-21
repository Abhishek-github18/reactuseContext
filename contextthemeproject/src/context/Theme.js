import { createContext, useContext } from "react";

// we can have default values in the context also it like saying that initially when context will create what 
// all values it should have already in it

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

// exporting ThemeContext provider ->  so that we can use this directly in the app.js file
export const ThemeProvider = ThemeContext.Provider;


// this is the custom hooks so that whenver you need ThemeContext you don't have to use two import statement
// import useContext from 'react' and import ThemeContext from ThemeContext , just simply import 
// import useTheme from Theme.js and your work is done you have to just use this by using spread opeartor

export default function useTheme(){
    return useContext(ThemeContext);
}
