// ➡️ Import React's useState and useEffect hooks.
import { useState, useEffect } from "react"

// ➡️ Import CSS styles.
import "./App.css"

// ➡️ Create a React component called App.
function App() {

  // ➡️ Stores what the user is typing.
  const [task, setTask] = useState("")

  // ➡️ When app starts:
  // ➡️ Try loading saved todos from browser storage.
  const [todos, setTodos] = useState(() => {

    // ➡️ Read saved data.
    const savedTodos = localStorage.getItem("todos")

    // ➡️ If data exists, convert text back into an array.
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }

    // ➡️ Otherwise start empty.
    return []
  })

  // ➡️ Runs when Add button is clicked.
  function addTodo() {

    // ➡️ Prevent adding empty tasks.
    if (task.trim() === "") return

    // ➡️ Add a new todo object to the array.
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

  // ➡️ Runs when Complete button is clicked.
  function toggleComplete(todoToToggle) {

    // ➡️ Loop through every todo.
    const newTodos = todos.map((todo) => {

      // ➡️ Found the todo we clicked.
      if (todo.text === todoToToggle.text) {

        // ➡️ Return a copy of the object.
        return {

          // ➡️ Copy all existing properties.
          ...todo,

          // ➡️ Reverse completed status.
          completed: !todo.completed
        }
      }

      // ➡️ Keep all other todos unchanged.
      return todo
    })

    // ➡️ Update state.
    setTodos(newTodos)
  }

  // ➡️ Runs when Clear All button is clicked.
  function clearTodos() {

    // ➡️ Remove all tasks.
    setTodos([])
  }

  // ➡️ Runs every time todos changes.
  useEffect(() => {

    // ➡️ Save todos into browser storage.
    localStorage.setItem(

      // ➡️ Storage key name.
      "todos",

      // ➡️ Convert array into text.
      JSON.stringify(todos)

    )

  }, [todos])

  // ➡️ Return what appears on screen.
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

      {/* ➡️ Show current input */}
      <p>You typed: {task}</p>

      {/* ➡️ Show number of tasks */}
      <p>Total Tasks: {todos.length}</p>

      {/* ➡️ Show message if there are no tasks */}
      {todos.length === 0 && (
        <p>No tasks yet</p>
      )}

      {/* ➡️ Loop through todos array */}
      {todos.map((todo, index) => (

        <div key={index}>

          {/* ➡️ Display todo text */}
          {/* ➡️ If completed, draw a line through the text */}
          <p
            style={{

              // ➡️ Ternary operator.
              // ➡️ If completed is true:
              // ➡️ Show line-through.
              // ➡️ Otherwise show normal text.
              textDecoration:
                todo.completed
                  ? "line-through"
                  : "none"

            }}
          >

            {/* ➡️ Show emoji based on completed status */}
            {todo.completed ? "✅ " : "⬜ "}

            {/* ➡️ Show task text */}
            {todo.text}

          </p>

          {/* ➡️ Delete this todo */}
          <button onClick={() => deleteTodo(todo)}>
            Delete
          </button>

          {/* ➡️ Toggle completed status */}
          <button onClick={() => toggleComplete(todo)}>
            Complete
          </button>

        </div>
      ))}

    </div>
  )
}

// ➡️ Export component so React can use it.
export default App