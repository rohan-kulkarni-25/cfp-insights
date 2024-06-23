import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./Slices/usersSlice";
import TalksReducer from "./Slices/talksSlice";
import UserReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
    talks: TalksReducer,
    user: UserReducer,
  },
});
