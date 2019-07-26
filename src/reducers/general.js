import {
	DISPLAY_LOGIN_CATEGORY_SELECTION,
	LOGIN_MMODAL_IS_OPEN,
	BURGER_MENU_TOGGLE,
} from '../constants/general';

const initialState = {
	loginCategorySelectionVisible: false,
	loginModalOpen: false,
	burgerMenuIsOpen: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_LOGIN_CATEGORY_SELECTION: {
			return {
				...state,
				loginCategorySelectionVisible: action.loginCategorySelectionVisible,
			}
		}
		case LOGIN_MMODAL_IS_OPEN: {
			return {
				...state,
				loginModalOpen: action.loginModalOpen,
			}
		}
		case BURGER_MENU_TOGGLE: {
			return {
				...state,
				burgerMenuIsOpen: action.burgerMenuIsOpen,
			}
		}
		default:
			return state;
	}
};

export default reducer;