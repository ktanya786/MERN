import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoItem from "./components/ToDoItem"
import ToDoItems from "./components/ToDoItems"
import "./style.css"
function App() {
  const itemsList =[{
    name: "go to collage",
    date: "10/4/2023"
  },{
    name:" Get milk",
    date: "10/5/2023"
  },{
    name:" Get grocerray",
    date: "10/5/2023"
  }]
  return (
   <center>
    <AppName />
    <AddToDo />
    <ToDoItems toDoItemsList={itemsList} />
   </center>
  )
}

export default App
