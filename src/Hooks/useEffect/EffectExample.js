// The useEffect Hook allows you to perform side effects in your components. 
// Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. 
// The second argument is optional.


import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EffectExample = () => {
    const[data, setData] = useState("");
    const[count, setCount] = useState(0);

    useEffect(() => {
         axios.get('https://dummyjson.com/products/1')
         .then((resp) => {
            setData(resp.data.category);
            console.log("API was called");
         })
    }, []);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <div>
                Hello World {data}
                {count}
                <button onClick={increment}>increment</button>
        </div>
    )
}

export default EffectExample