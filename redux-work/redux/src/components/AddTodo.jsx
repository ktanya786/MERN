import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1>Add to Do</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter your to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
