// we created a function name app and inside it we created an array name todos
import { useState } from "react"
function App(){
  const todos =[
"GYM",
"STUDY REACT",
"BUY MILK"
  ]
return(
  <div>
    <h1>Todo App</h1>
{todos.map((todo)=>(<p>{todo}</p>))
}
</div>
)
}
export default App