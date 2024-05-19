import React, {useState} from 'react';

const TodoInput = ({addinList}) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            addinList(inputText);
            setInputText("");
        }
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter your todo"
                value={inputText}
                onChange={(e) => handleChange(e)}
                onKeyDown={handleKeyPress}
            />
            <button onClick={() => {
                addinList(inputText);
                setInputText("");
            }}>+</button>
        </div>
    )
}

export default TodoInput;