import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;
