import ToDoItem from "./ToDoItem";
let ToDoItems = ({toDoItemsList, handleDeleteTask}) =>{
  return(
    <div>
      {toDoItemsList.map((item) => (<ToDoItem itemName={item.name} itemDate={item.date} handleDeleteTask={handleDeleteTask}/>))}
    </div>
  );
};

export default ToDoItems;