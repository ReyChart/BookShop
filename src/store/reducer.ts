import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { booksSlice } from './books/books.slice';
import { categoriesSlice } from './categories/categories.slice';
import { persistConfig } from './persist.config';

const rootReducer = combineReducers({
  books: booksSlice.reducer,
  categories: categoriesSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
