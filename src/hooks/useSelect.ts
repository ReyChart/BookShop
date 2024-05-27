import { RootState } from '@/store/store';
import { IBooksDataProps } from '@/app/api/books/route';
import { ICategoriesInitialState } from '../store/categories/categories.slice';

export const selectBooks = (state: RootState): IBooksDataProps[] => state.books.books;

export const selectCategories = (state: RootState): ICategoriesInitialState => state.categories;

export const selectIsLoading = (state: RootState): boolean => state.books.isLoading;
