import React from 'react';

const TodoList = ({ item, index, deleteFromList}) => {

    const handleDelete = (index) => {
        deleteFromList(index);
    }

    return (
        <li style={{display: 'flex', justifyContent: "center"}}>
            <h4 style={{color: 'red', marginRight: 10}}>{item}</h4>
            <button onClick={(e) => handleDelete(index)}>delete</button>
        </li>
    )
}

export default TodoList;