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

