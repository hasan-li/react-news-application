import {
	GET_ALL_CATEGORIES,
	SET_ALL_CATEGORIES,
} from '../constants/categories';

const initialState = {
	allCategories: [],
	loadingCategories: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORIES: {
			return {
				...state,
				loadingCategories: true,
			}
		}
		case SET_ALL_CATEGORIES: {
			return {
				...state,
				allCategories: [...action.allCategories],
				loadingCategories: false,
			}
		}
		default:
			return state;
	}
};

export default reducer;