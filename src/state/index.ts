import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme";

const store = configureStore({
  reducer: {
    themePick: theme,
  },
});

export default store;
