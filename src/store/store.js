import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});
