import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pagesReducer from './pagesReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  pages: pagesReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
