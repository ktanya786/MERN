import { useContext, createContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Buy milk",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export default ToDoContext;

export const useTodoContext = () => {
  return useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;
