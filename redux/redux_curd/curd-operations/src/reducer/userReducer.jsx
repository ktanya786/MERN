import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
  name: "users",
  initialState: { userList },
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, emailid } = action.payload;
      const userToUpdate = state.userList.find(
        (user) => user.id === parseInt(id)
      );
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.emailid = emailid;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.userList = state.userList.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
