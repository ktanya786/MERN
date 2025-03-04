import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: toDoReducer,
});
