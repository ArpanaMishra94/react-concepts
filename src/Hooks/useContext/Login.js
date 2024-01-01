import React, {useContext} from 'react';
import { AppContext } from './ContextExample';

const Login = () => {

    const {setUserName} = useContext(AppContext);

    const val = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div>
            <input placeholder='ex...' onChange={val}/>
        </div>
    )
}

export default Login;