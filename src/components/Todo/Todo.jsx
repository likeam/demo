import React, { useState } from 'react'
import "./Style.css";

const Todo = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>  todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10)
      })
    )
    setInput("");
  }

  const romoveTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id))
  
  return (
    <div className='container'>
      <input type="text" placeholder='New Todo' value={input} 
      onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todo-list">
        {
          todos.map(({text, id}) => (
            <li key={id} className='todo'>
              <span>{text}</span>
              <button className='close' onClick={() => romoveTodo(id)}>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo;