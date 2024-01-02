// The useCallback hook is a powerful tool that can be used to improve the performance of React components. 
// By memoizing callback functions, useCallback can prevent unnecessary re-renders, which can lead to a smoother user experience.

import React, { useCallback, useState } from 'react';
import Child from './Child';

const CallbackExample = () => {
    const [data, setData] = useState('Arp Data');
    const [toggle, setToggle] = useState(false);

    const func = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div>
            <Child func={func} />
            <button onClick={() => {
                setToggle(!toggle)
            }}>Toggle</button>

            {toggle && <h1> toggle </h1>}
        </div>
    )
}

export default CallbackExample;