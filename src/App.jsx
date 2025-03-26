import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useState } from 'react'

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true },
  { id: 2, content: "Jog around the park 3x", completed: false },
  { id: 3, content: "10 minutes meditation", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "Pick up groceries", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false }
];

function App() {

  const [todos, setTodos] = useState(data);
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  return (
    <>
      <div className={`wrapper ${themeClass}`}>
        <div className="container">
          <Header themeLight={themeLight} setThemeLight={setThemeLight} />
          <main>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
