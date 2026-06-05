// ➡️ Import React's useState hook so we can store changing data.
import { useState } from "react"

// ➡️ Import CSS styles.
import "./App.css"

// ➡️ Create a React component called App.
function App() {

  // ➡️ Stores what the user is typing.
  const [task, setTask] = useState("")

  // ➡️ Stores all todos as objects.
  const [todos, setTodos] = useState([])

  // ➡️ Runs when Add button is clicked.
  function addTodo() {

    // ➡️ Prevent adding empty tasks.
    if (task.trim() === "") return

    // ➡️ Create a new todo object and add it to the array.
    setTodos([
      ...todos,
      {
        text: task,
        completed: false
      }
    ])

    // ➡️ Clear input after adding.
    setTask("")
  }

  // ➡️ Runs when Delete button is clicked.
  function deleteTodo(todoToDelete) {

    // ➡️ Keep every todo except the one clicked.
    const newTodos = todos.filter(
      (todo) => todo.text !== todoToDelete.text
    )

    // ➡️ Update state.
    setTodos(newTodos)
  }

  // ➡️ Runs when Clear All button is clicked.
  function clearTodos() {

    // ➡️ Replace all todos with an empty array.
    setTodos([])
  }

  // ➡️ Return what appears on the screen.
  return (
    <div>

      {/* ➡️ Page title */}
      <h1>Todo App</h1>

      {/* ➡️ Input field */}
      <input
        type="text"

        // ➡️ Show current task value.
        value={task}

        // ➡️ Update task whenever user types.
        onChange={(e) => setTask(e.target.value)}
      />

      {/* ➡️ Add task button */}
      <button onClick={addTodo}>
        Add
      </button>

      {/* ➡️ Clear all tasks button */}
      <button onClick={clearTodos}>
        Clear All
      </button>

      {/* ➡️ Show current text being typed */}
      <p>You typed: {task}</p>

      {/* ➡️ Show total number of tasks */}
      <p>Total Tasks: {todos.length}</p>

      {/* ➡️ If there are no tasks, show a message */}
      {todos.length === 0 && (
        <p>No tasks yet</p>
      )}

      {/* ➡️ Loop through todos array */}
      {todos.map((todo, index) => (

        // ➡️ key helps React track each item.
        <div key={index}>

          {/* ➡️ Display todo text */}
          <p>{todo.text}</p>

          {/* ➡️ Delete this specific todo */}
          <button onClick={() => deleteTodo(todo)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}

// ➡️ Export component so React can use it.
export default App