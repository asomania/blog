import { createSlice } from "@reduxjs/toolkit";

const themeChanger = createSlice({
  name: "themePick",
  initialState: {
    theme: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const tabChanger = createSlice({
  name: "tabPick",
  initialState: {
    tab: "home",
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setTheme } = themeChanger.actions;
export const { setTab } = tabChanger.actions;

export const themeReducer = themeChanger.reducer;
export const tabReducer = tabChanger.reducer;
