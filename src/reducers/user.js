import {
	GET_USER,
	USER_RECEIVED,
	ADD_USER_SELECTED_CATEGORIES,
	SET_USER_SELECTED_CATEGORIES_SUCCESS,
	SET_USER_SELECTED_CATEGORIES_ERROR,
} from '../constants/user';

const initialState = {
	loadingUser: false,
	user: undefined,
	selectedCategories: [],
	userCategoriesSetSuccess: undefined,
	userCategoriesSetError: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_USER: {
		return {
			...state,
			loadingUser: true,
		};
	}
	case USER_RECEIVED: {
		return {
			...state,
			user: action.user,
			loadingUser: false,
		};
	}
	case ADD_USER_SELECTED_CATEGORIES: {
		return {
			...state,
			selectedCategories: [...action.categories],
		};
	}
	case SET_USER_SELECTED_CATEGORIES_SUCCESS: {
		return {
			...state,
			userCategoriesSetSuccess: action.success,
		};
	}
	case SET_USER_SELECTED_CATEGORIES_ERROR: {
		return {
			...state,
			userCategoriesSetError: action.error,
		};
	}
	default:
		return state;
	}
};

export default reducer;