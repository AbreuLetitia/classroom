import {configureStore} from '@reduxjs/toolkit';
import {themesSlice} from '../themes/redux';

export const store = configureStore({
  reducer: {
    themes: themesSlice.reducer,
  },
});
