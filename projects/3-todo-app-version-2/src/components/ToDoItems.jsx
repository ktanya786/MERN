import ToDoItem from "./ToDoItem";
let ToDoItems = ({toDoItemsList}) =>{
  return(
    <div>
      {toDoItemsList.map((item) => (<ToDoItem itemName={item.name} itemDate={item.date} />))}
    </div>
  );
};

export default ToDoItems;