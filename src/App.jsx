// ➡️ Import React's useState hook so we can store changing data.
import { useState } from "react"

// ➡️ Create a React component called App.
function App() {

  // ➡️ Stores what user is typing in the input box.
  const [task, setTask] = useState("")

  // ➡️ Stores all tasks in an array.
  const [todos, setTodos] = useState([])

  // ➡️ Runs when Add button is clicked.
  function addTodo() {

    // ➡️ If input is empty or only spaces, stop.
    if (task.trim() === "") return

    // ➡️ Create a new array:
    // ➡️ Copy all old todos (...todos)
    // ➡️ Add the new task at the end.
    setTodos([...todos, task])

    // ➡️ Clear the input box after adding.
    setTask("")
  }

  // ➡️ Runs when Delete button is clicked.
  function deleteTodo(todoToDelete) {

    // ➡️ Loop through all todos.
    // ➡️ Keep every todo EXCEPT the one we want to delete.
    const newTodos = todos.filter(
      (todo) => todo !== todoToDelete
    )

    // ➡️ Update state with the filtered array.
    setTodos(newTodos)
  }

  // ➡️ Return the UI that should appear on the screen.
  return (
    <div>

      {/* ➡️ Page heading */}
      <h1>Todo App</h1>

      {/* ➡️ Input box */}
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

      {/* ➡️ Show what user is typing */}
      <p>You typed: {task}</p>

      {/* ➡️ Loop through todos array */}
      {todos.map((todo, index) => (

        // ➡️ key helps React track each item.
        <div key={index}>

          {/* ➡️ Display todo text */}
          <p>{todo}</p>

          {/* ➡️ Delete this specific todo */}
          <button onClick={() => deleteTodo(todo)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}

// ➡️ Make this component available so React can render it.
export default App