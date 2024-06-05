import { createContext } from "react";

export const ToDoItemsContext = createContext({itemList: [],
  addNewItem: () => {},
  deleteItem: () => {}
});
