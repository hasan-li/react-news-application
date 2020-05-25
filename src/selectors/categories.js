import { createSelector } from 'reselect';
import getFp from 'lodash/fp/get';

import { REDUCER_KEY as CATEGORIES_REDUCER_KEY } from '../constants/categories';

export const categoriesSelector = getFp(
	CATEGORIES_REDUCER_KEY,
);

export const allCategoriesSelector = createSelector(
	categoriesSelector,
	getFp('allCategories'),
);