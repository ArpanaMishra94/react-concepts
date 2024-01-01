// The purpose of useLayoutEffect is to let your component use layout information for rendering: Render the initial content. 
// Measure the layout before the browser repaints the screen.

// The useLayoutEffect function is triggered synchronously 
// before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.


import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

const LayoutExample = () => {
    const[data, setData] = useState('Input Text');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = 'Hello'
        // setData('useEffect');
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
        setData('useLayoutEffect');
    }, [])

    return(
        <div>
            <h1>Layout Effect</h1>
            <input ref={inputRef} placeholder="ex..." value='Arpana'/>
            <p>{data}</p>
        </div>
    )
}

export default LayoutExample;