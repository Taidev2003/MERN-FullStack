import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";
import userReducer from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
