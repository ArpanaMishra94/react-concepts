import React, {useState, useEffect} from 'react';
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeButton';
import {AppContextProvider} from './theme';


const ThemeSwitcher = () => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => {
        setThemeMode('dark');
    }

    const lightTheme = () => {
        setThemeMode('light');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);


    return (
        <AppContextProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
        </AppContextProvider>
    )
}

export default ThemeSwitcher;