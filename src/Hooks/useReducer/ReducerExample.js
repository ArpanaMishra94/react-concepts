
// The useReducer Hook is used to store and update states, just like the useState Hook. 
// It accepts a reducer function as its first parameter and the initial state as the second. 
// useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.



import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
}

const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    const func = () => {
        dispatch({ type: "INCREMENT" });
        dispatch({ type: "toggleShowText" });
    }

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={func}> Click Here </button>
            {state.showText && <p>This is Arpana</p>}
        </div >
    )
}

export default ReducerExample










// import React, { useState } from 'react'

// const ReducerExample = () => {
//     const [count, setCount] = useState(0);
//     const [showText, setShowText] = useState(true);

//     const increment = () => {
//         setCount(count + 1);
//         setShowText(!showText);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}> Click Here </button>
//             {showText && <p>This is Arpana</p>}
//         </div >
//     )
// }

// export default ReducerExample
