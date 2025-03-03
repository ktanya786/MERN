import { useEffect, useState } from "react";
import {
  ToDoContextProvider,
  useTodoContext,
  ToDoContext,
} from "./contexts/TodoContext";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";

function App() {
  // const { todos, addTodo, deleteTodo, updateTodo, toggleCompleted } =
  //  useTodoContext();

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    console.log(localStorage.getItem("todos"));
    let todos = [];

    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      try {
        todos = JSON.parse(storedTodos);
      } catch (e) {
        console.error("Error parsing todos from localStorage", e);
        todos = []; // Default to empty array in case of parse error
      }
    }

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              /*Loop and Add TodoItem here */
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <ToDoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
