import { configureStore } from "@reduxjs/toolkit";
import slice from "./controls/slice";

const store = configureStore({
  reducer: {
    slice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
