import { useState } from "react"
import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import ToDoItem from "./components/ToDoItem"
import ToDoItems from "./components/ToDoItems"
import "./style.css"
import WelcomeMessage from "./components/WelcomeMessage"
function App() {
  const initialItemsList =[{
    name: "go to collage",
    date: "10/4/2023"
  },{
    name:" Get milk",
    date: "10/5/2023"
  },{
    name:" Get grocerray",
    date: "10/5/2023"
  }];

  const [itemList, setItemList] = useState(initialItemsList);
  
  const handleAddItem = (itemName, addDate) =>{
    let newItemList = [...itemList, {name: itemName, date: addDate}];
    setItemList(newItemList);

  };

  const onDeleteTask = (taskName) =>{
    console.log(`Item deleted : ${taskName}`);
    let newTaskList = itemList.filter(item => item.name !== taskName);
    setItemList(newTaskList);
    
  }

  return (
   <center>
    <AppName />
    <AddToDo onAddIem = {handleAddItem}/>
    {itemList.length===0 && <WelcomeMessage />}
    <ToDoItems toDoItemsList={itemList} handleDeleteTask={onDeleteTask} />
   </center>
  )
}

export default App
