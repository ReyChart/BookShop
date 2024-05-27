import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBooksDataProps } from '@/app/api/books/route';
import { getBooks } from './books.actions';

interface IBooksInitialStateProps {
  books: IBooksDataProps[];
  isLoading: boolean;
}

const initialState: IBooksInitialStateProps = {
  books: [],
  isLoading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }: PayloadAction<IBooksDataProps[]>) => {
        state.books = payload;
        state.isLoading = false;
      });
  },
});

export const booksActions = { ...booksSlice.actions };
