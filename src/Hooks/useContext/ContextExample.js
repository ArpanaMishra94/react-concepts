// useContext is a React hook that provides a way to share data (context) across multiple components without explicitly passing it through props. 
// It is part of the React Context API, which is built into the React library.


import React, {useState, createContext} from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

const ContextExample = () => {
    const [userName, setUserName] = useState('Arpana');

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <Login/>
            <User/>
        </AppContext.Provider>
    )
}

export default ContextExample;