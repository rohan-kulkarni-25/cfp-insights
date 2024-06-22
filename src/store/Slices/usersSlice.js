import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.usersData = action.payload;
    },
  },
});

export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;
