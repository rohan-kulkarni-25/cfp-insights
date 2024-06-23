import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Slices/usersSlice";
import TalksReducer from "./Slices/talksSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    talks: TalksReducer,
  },
});
