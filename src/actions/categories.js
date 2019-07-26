import {
	GET_ALL_CATEGORIES,
	SET_ALL_CATEGORIES,
} from '../constants/categories';

export const getAllCategories = () => ({
	type: GET_ALL_CATEGORIES,
});

export const setAllCategories = (allCategories) => ({
	type: SET_ALL_CATEGORIES,
	allCategories
});
