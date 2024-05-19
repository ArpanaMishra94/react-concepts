import React, {useState} from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList'

const Todolist = () => {
    const [todolist, setTodolist] = useState([]);
    
    let addinList = (inputText) => {
        if(inputText !== "") {
            setTodolist([...todolist, inputText])
        }
    }

    const deleteFromList = (key) => {
        let newArr = [...todolist];
        newArr.splice(key, 1);
        setTodolist([...newArr]);
    }

    return (
        <div>
           <h1>Todolist</h1>
           <TodoInput addinList={addinList}/>
           <h2>Todo</h2>
           <hr/>
           {
            todolist.map((item, i) => (
                <TodoList key={i} item={item} index={i} deleteFromList={deleteFromList}/>
            ))
           }
           
        </div>
    )
}

export default Todolist;