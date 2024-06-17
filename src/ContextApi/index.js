import React, {createContext, useState} from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile'
import './index.css';

export const AppContext = createContext();

const ContextApi = () => {
    const [user, setUser] = useState();

    return (
        <AppContext.Provider value={{user, setUser}}>
            <div className='container'>
                <Login/>
                <Profile/>
            </div>
        </AppContext.Provider>
    )
}

export default ContextApi;