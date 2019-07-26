import {
	DISPLAY_LOGIN_CATEGORY_SELECTION,
	LOGIN_MMODAL_IS_OPEN,
	BURGER_MENU_TOGGLE,
} from '../constants/general';

export const displayLoginCategorySelection = (loginCategorySelectionVisible) => ({
	type: DISPLAY_LOGIN_CATEGORY_SELECTION,
	loginCategorySelectionVisible,
});

export const setLoginModalOpen = (loginModalOpen) => ({
	type: LOGIN_MMODAL_IS_OPEN,
	loginModalOpen,
});

export const setBurgerMenuStatus = (burgerMenuIsOpen) => ({
	type: BURGER_MENU_TOGGLE,
	burgerMenuIsOpen,
});
