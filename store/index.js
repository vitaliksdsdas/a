import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

const makeStore = () => store
export const wrapper = createWrapper(makeStore, { debug: true })