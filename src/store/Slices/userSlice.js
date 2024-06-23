import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "6677413432ba84d43bd05c2f",
    name: "asdf",
    username: "a3asdfw",
    email: "sdaf@gmail.com",
    role: "member",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUsers } = userSlice.actions;

export default userSlice.reducer;
