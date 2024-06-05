import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

function ToDoItem({ itemName, itemDate}){
  
  const { deleteItem }= useContext(ToDoItemsContext);

  return(
    <div className="container item-container">
      <div className="row item-row">
        <div className="col-6">
         {itemName}
        </div>
        <div className="col-4">
          {itemDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger btn-lg kg-btn" onClick={()=> deleteItem(itemName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem