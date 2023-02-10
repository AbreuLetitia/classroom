import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';

export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    updateSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});
