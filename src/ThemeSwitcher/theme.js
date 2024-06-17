import { createContext, useContext } from "react";

export const AppContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
});

export const AppContextProvider = AppContext.Provider;

export default function useTheme() {
    return useContext(AppContext);
}