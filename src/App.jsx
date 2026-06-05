// ➡️ Import React's useState hook so we can store changing data.
import { useState } from "react"

// ➡️ Import CSS styles.
import "./App.css"

// ➡️ Create a React component called App.
function App() {

  // ➡️ Stores what the user is typing.
  const [task, setTask] = useState("")

  // ➡️ Stores all todos.
  // ➡️ Each todo will now be an OBJECT instead of a string.
  const [todos, setTodos] = useState([])

  // ➡️ Runs when Add button is clicked.
  function addTodo() {

    // ➡️ Prevent empty tasks.
    if (task.trim() === "") return

    // ➡️ Create a new todo object.
    // ➡️ text = actual task
    // ➡️ completed = task status
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

    // ➡️ Loop through all todos.
    // ➡️ Keep every todo except the one we clicked.
    const newTodos = todos.filter(
      (todo) => todo.text !== todoToDelete.text
    )

    // ➡️ Update state.
    setTodos(newTodos)
  }

  // ➡️ Return what appears on the screen.
  return (
    <div>

      {/* ➡️ Page title */}
      <h1>Todo App</h1>

      {/* ➡️ Input field */}
      <input
        type="text"

        // ➡️ Show current value of task.
        value={task}

        // ➡️ Update task whenever user types.
        onChange={(e) => setTask(e.target.value)}
      />

      {/* ➡️ Add button */}
      <button onClick={addTodo}>
        Add
      </button>

      {/* ➡️ Display current input value */}
      <p>You typed: {task}</p>

      {/* ➡️ Loop through todos array */}
      {todos.map((todo, index) => (

        // ➡️ React uses key to identify items.
        <div key={index}>

          {/* ➡️ Display the text property of the object */}
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

// ➡️ Export component.
export default App