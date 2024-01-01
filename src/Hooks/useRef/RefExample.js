import React, { useRef } from 'react';

const RefExample = () => {
    const refInput = useRef(null);

    const submit = () => {
        console.log(refInput.current.value);
        refInput.current.focus();
        refInput.current.value = '';
    }

    return (
        <div>
            <h1>Use Ref</h1>
            <input placeholder='ex...' ref={refInput} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default RefExample;