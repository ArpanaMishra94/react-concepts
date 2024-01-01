import React, {useContext} from 'react';
import { AppContext } from './ContextExample';

const User = () => {
    const {userName} = useContext(AppContext);

    return (
        <div>
            User: {userName} 
        </div>
    )
}

export default User