import { RootState } from '@/store/store';
import { ICategoriesInitialState } from '../store/categories/categories.slice';

export const selectCategories = (state: RootState): ICategoriesInitialState => state.categories;
