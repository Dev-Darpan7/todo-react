// ➡️ Import React's useState hook so we can store changing data.
import { useState } from "react"

// ➡️ Create a React component called App.
function App() {

  // ➡️ Create a state variable task (starts as an empty string)
  // ➡️ setTask is used to update task
  // ➡️ Stores what the user is currently typing
  const [task, setTask] = useState("")

  // ➡️ Create a state variable todos (starts as an empty array)
  // ➡️ setTodos is used to update the todos array
  // ➡️ Stores all tasks
  const [todos, setTodos] = useState([])

  // ➡️ Function that runs when Add button is clicked
  function addTodo() {

    // ➡️ Create a new array containing:
    // ➡️ all old todos (...todos)
    // ➡️ plus the new task
    setTodos([...todos, task])
  }

  // ➡️ Return the UI that should appear on the screen
  return (
    // ➡️ Create a container to hold everything
    <div>

      {/* ➡️ Display heading */}
      <h1>Todo App</h1>

      {/* ➡️ Input box for typing tasks */}
      <input
        type="text"

        // ➡️ Show the current value stored in task
        value={task}

        // ➡️ Whenever user types, update task
        onChange={(e) => setTask(e.target.value)}
      />

      {/* ➡️ When clicked, run addTodo function */}
      <button onClick={addTodo}>
        Add
      </button>

      {/* ➡️ Display current text being typed */}
      <p>You typed: {task}</p>

      {/* ➡️ Loop through todos array */}
      {/* ➡️ Create a paragraph for each todo */}
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}

    </div>
  )
}

// ➡️ Make this component available so React can render it
export default App