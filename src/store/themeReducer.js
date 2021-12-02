import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.name = payload;
    },
  },
});

export const themeSelector = (state) => state.theme.name;
export const { setTheme } = slice.actions;

export default slice.reducer;
