import React, {useContext, useState} from 'react';
import { AppContext } from '../index';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(AppContext);

    const handleSubmit = () => {
        setUser({userName, password});
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Login</h1>
            <input type='text' placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
            {' '}
            <input type='text' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;