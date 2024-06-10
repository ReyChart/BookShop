import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { booksSlice } from './books/books.slice';
import { categoriesSlice } from './categories/categories.slice';
import { persistConfig } from './persist.config';
import { userSlice } from './user/user.slice';

const rootReducer = combineReducers({
  books: booksSlice.reducer,
  categories: categoriesSlice.reducer,
  user: userSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
