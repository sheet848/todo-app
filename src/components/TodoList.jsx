import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoFilterControl from './TodoFilterControl'

const TodoList = ({ todos, setTodos, filteredTodos, filterStatus, setFilterStatus }) => {

    const [leftTodoCount, setLeftTodoCount] = useState(0);

    useEffect(() => {
        const unCompletedTodos = todos.filter((todo) => !todo.completed);
        setLeftTodoCount(unCompletedTodos.length);
    }, [todos]);

    const textPlacer = filterStatus === "completed" ? "closed task" : "task";

    const clearCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.completed));
        setFilterStatus("all");
    }

  return (
    <>
    <section className="todo-list-section">
        {
            filteredTodos.length < 1 ? (
                <p className="info-text">There is no {textPlacer}</p>
            ) : (
                <ul className="todo-list">
                    {
                        filteredTodos.map((todo) => (
                            <TodoItem 
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                todos={todos}
                                />
                        ))
                    }
                </ul>
            )
        }

        <div className="todo-filter-control">
            <div className="todos-count">{leftTodoCount} items left</div>
            <div className="control-btn group filter-control-for-desktop">
                <TodoFilterControl 
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                 />
            </div>
        </div>

        <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodos}>Clear completed</button>
        </div>

    </section>

    {/* For Mobile */}
    <section className="filter-control-for-mobile">
        <div className="control-btn group">
        <TodoFilterControl 
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
        />
        </div>
    </section>
    </>
  )
}

export default TodoList
