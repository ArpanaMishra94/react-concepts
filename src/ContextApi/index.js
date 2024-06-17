import React, {createContext, useState} from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile'

export const AppContext = createContext();

const ContextApi = () => {
    const [user, setUser] = useState();

    return (
        <AppContext.Provider value={{user, setUser}}>
           <Login/>
           <Profile/>
        </AppContext.Provider>
    )
}

export default ContextApi;