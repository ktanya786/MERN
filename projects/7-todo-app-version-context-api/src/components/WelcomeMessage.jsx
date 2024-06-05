import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

let WelcomeMessage = () => {
  const { itemList } = useContext(ToDoItemsContext);
  return (itemList.length===0 &&<h3> All taks are done...</h3>);
};

export default WelcomeMessage;