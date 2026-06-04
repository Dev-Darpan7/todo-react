// ➡️ Import React's useState hook so we can store changing data.
import { useState } from "react"
// ➡️ Create a React component called App.
function App() {
  // ➡️ Create a state variable task (starts as an empty string) and a function setTask to update it.

  const [task, setTask] = useState("")
// ➡️ Return the UI that should appear on the screen.
  return (
    // ➡️ Create a container to hold everything.
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}//➡️ Show the current value stored in the task variable inside the input box.
        onChange={(e) => setTask(e.target.value)}//➡️ Whenever the user types, update task with the text currently in the input.
      />
 {/* ➡️ Display whatever text is currently stored in task. */}
      <p>You typed: {task}</p> 
    </div>
  )
}

export default App
// ➡️ Make this component available so React can render it.