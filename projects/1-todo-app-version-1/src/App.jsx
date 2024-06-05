import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoItem from "./components/ToDoItem"
import "./style.css"
function App() {

  return (
   <center>
    <AppName />
    <AddToDo />
    <ToDoItem />
   </center>
  )
}

export default App
