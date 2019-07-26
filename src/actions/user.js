import {
	GET_USER,
	ADD_USER_SELECTED_CATEGORIES,
	SET_USER_SELECTED_CATEGORIES,
	SET_USER_SELECTED_CATEGORIES_SUCCESS,
	SET_USER_SELECTED_CATEGORIES_ERROR,
} from '../constants/user';

export const getUser = () => ({
	type: GET_USER,
});

export const addUserSelectedCategories = (categories) => ({
	type: ADD_USER_SELECTED_CATEGORIES,
	categories
});

export const setUserSelectedCategories = (selectedCategories = [], deselectedCategories = []) => ({
	type: SET_USER_SELECTED_CATEGORIES,
	selectedCategories,
	deselectedCategories,
});

export const setUserSelectedCategoriesSuccess = (success) => ({
	type: SET_USER_SELECTED_CATEGORIES_SUCCESS,
	success,
});

export const setUserSelectedCategoriesError = (error) => ({
	type: SET_USER_SELECTED_CATEGORIES_ERROR,
	error,
});
