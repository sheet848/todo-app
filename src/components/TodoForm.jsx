import React, { useState } from 'react'

const TodoForm = ({ todos, setTodos }) => {

    const [todoInput, setTodoInput] = useState("");

    const handleChange = (e) => {
        setTodoInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoInput) {
            const newTodo = {
                id: generateId(todos),
                content: todoInput.trim(),
                completed: false
            };

            setTodos([newTodo, ...todos]);
            setTodoInput("");
        }
    }

    const generateId = () => {
        const ids = Array.map((item) => item.id);
        return Math.max(...ids) + 1;
    }

    
  return (
    <>
    <div className="form-control">
        <div className="checkbox-border-wrap">
            <span className="checkbox"></span>
        </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Add New Task</label>
            <input type="text"
                   name="todo-input"
                   className="todo-input"
                   id="todoInput"
                   placeholder='Create a new task... '
                   value={todoInput}
                   onChange={handleChange}
             />
            <button id='submitNewTodo' type='submit'>Add</button>
        </form>
    </div>
    </>
  )
}

export default TodoForm