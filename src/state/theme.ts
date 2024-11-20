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

export const { setTheme } = themeChanger.actions;
export default themeChanger.reducer;
