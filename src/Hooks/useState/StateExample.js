// useState is React Hook that allows you to add state to a functional component. 
// It returns an array with two values: the current state and a function to update it. 
// The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.


import React, { useState } from 'react'

const StateTutorial = () => {
  // const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('Web Developer');

  const onChange = (e) => {
    setInput(e.target.value);
  }

  // const increment = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }

  return (
    <div>
      {/* {counter}
      <button onClick={increment}>Increment</button> */}


      <input placeholder='Enter string' onChange={onChange} />
      {input}
    </div>
  )
}

export default StateTutorial;

