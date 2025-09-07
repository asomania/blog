import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, tabReducer } from "./theme";

const store = configureStore({
  reducer: {
    themePick: themeReducer,
    tabPick: tabReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
