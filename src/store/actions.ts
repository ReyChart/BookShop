import { categoriesActions } from './categories/categories.slice';
import { booksActions } from './books/books.slice';

export const actions = {
  ...booksActions,
  ...categoriesActions,
};
