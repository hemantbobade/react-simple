import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Simple React App</h1>
      </header>

      <main className="main">
        {/* Counter Section */}
        <section className="card">
          <h2>Counter</h2>
          <p className="counter-display">{count}</p>
          <div className="button-group">
            <button onClick={decrement} className="btn btn-secondary">
              Decrease
            </button>
            <button onClick={reset} className="btn btn-neutral">
              Reset
            </button>
            <button onClick={increment} className="btn btn-primary">
              Increase
            </button>
          </div>
        </section>

        {/* Name Input Section */}
        <section className="card">
          <h2>Greeting</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          {name && <p className="greeting">Hello, {name}! 👋</p>}
        </section>

        {/* Todo List Section */}
        <section className="card">
          <h2>Todo List</h2>
          <div className="todo-input">
            <input
              type="text"
              placeholder="Add a new todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              className="input"
            />
            <button onClick={addTodo} className="btn btn-primary">
              Add
            </button>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <span>{todo.text}</span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="btn-remove"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          {todos.length === 0 && <p className="empty-message">No todos yet!</p>}
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Simple React App</p>
      </footer>
    </div>
  )
}

export default App
