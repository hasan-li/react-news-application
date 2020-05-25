import {
	DISPLAY_LOGIN_CATEGORY_SELECTION,
	INIT_AUTH_MODAL_IS_OPEN,
	BURGER_MENU_TOGGLE,
} from '../constants/app';

export const displayInitAuthModal = (initAuthModalVisible) => ({
	type: DISPLAY_LOGIN_CATEGORY_SELECTION,
	initAuthModalVisible,
});

export const setLoginModalOpen = (loginModalOpen) => ({
	type: INIT_AUTH_MODAL_IS_OPEN,
	loginModalOpen,
});

export const setBurgerMenuStatus = (burgerMenuIsOpen) => ({
	type: BURGER_MENU_TOGGLE,
	burgerMenuIsOpen,
});
