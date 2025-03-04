import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const handleEdit = (todo) => {
    console.log("Edit button clicked", todo.id + "..." + todo.text);
    dispatch(updateTodo(todo));
  };
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>edit</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
