// ➡️ Import React hooks for state and lifecycle
import { useState, useEffect } from "react"

// ➡️ Import CSS
import "./App.css"

// ➡️ Main App component
function App() {

  // ➡️ Stores what user types in input box
  const [task, setTask] = useState("")

  // ➡️ Stores all todos (loaded from localStorage if available)
  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos")

    // ➡️ If saved todos exist → convert from string to array
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }

    // ➡️ Otherwise start with empty list
    return []
  })

  // ➡️ Add new todo
  function addTodo() {

    // ➡️ Prevent empty tasks
    if (task.trim() === "") return

    // ➡️ Add new todo object
    setTodos([
      ...todos,
      {
        text: task,
        completed: false
      }
    ])

    // ➡️ Clear input after adding
    setTask("")
  }

  // ➡️ Delete todo
  function deleteTodo(todoToDelete) {

    // ➡️ Keep everything except selected todo
    const newTodos = todos.filter(
      (todo) => todo.text !== todoToDelete.text
    )

    setTodos(newTodos)
  }

  // ➡️ Toggle completed state
  function toggleComplete(todoToToggle) {

    const updatedTodos = todos.map((todo) => {

      // ➡️ Find clicked todo
      if (todo.text === todoToToggle.text) {

        // ➡️ Flip completed true/false
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    })

    setTodos(updatedTodos)
  }

  // ➡️ Clear all todos
  function clearTodos() {
    setTodos([])
  }

  // ➡️ Save todos in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // ➡️ UI
  return (
    <div className="app-container">

      {/* ➡️ Title */}
      <h1 className="title">Todo App</h1>

      {/* ➡️ Input section */}
      <div className="input-section">

        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTodo}>
          Add
        </button>

        <button className="clear-btn" onClick={clearTodos}>
          Clear
        </button>

      </div>

      {/* ➡️ Stats */}
      <p className="stats">Total Tasks: {todos.length}</p>

      {/* ➡️ Empty state */}
      {todos.length === 0 && (
        <p className="empty">No tasks yet 🚀</p>
      )}

      {/* ➡️ Todo list */}
      <div className="todo-list">

        {todos.map((todo, index) => (

          <div className="todo-item" key={index}>

            {/* ➡️ Todo text */}
            <span
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>

            {/* ➡️ Buttons */}
            <div className="actions">

              <button
                className="complete-btn"
                onClick={() => toggleComplete(todo)}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo)}
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App