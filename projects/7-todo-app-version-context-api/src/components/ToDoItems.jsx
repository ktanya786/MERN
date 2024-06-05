import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoItemsContext } from "../store/todo-items-store";

let ToDoItems = () =>{
 const { itemList }= useContext(ToDoItemsContext);
  console.log(itemList);


  return(
    <div>
      {itemList.map((item) => (<ToDoItem itemName={item.name} itemDate={item.date} />))}
    </div>
  );
};

export default ToDoItems;