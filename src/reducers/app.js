import {
	DISPLAY_LOGIN_CATEGORY_SELECTION,
	INIT_AUTH_MODAL_IS_OPEN,
	BURGER_MENU_TOGGLE,
} from '../constants/app';

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
				initAuthModalVisible: action.initAuthModalVisible,
			};
		}
		case INIT_AUTH_MODAL_IS_OPEN: {
			return {
				...state,
				loginModalOpen: action.loginModalOpen,
			};
		}
		case BURGER_MENU_TOGGLE: {
			return {
				...state,
				burgerMenuIsOpen: action.burgerMenuIsOpen,
			};
		}
		default:
			return state;
	}
};

export default reducer;