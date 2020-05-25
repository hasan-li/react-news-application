import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Mobile, Desktop, Tablet } from '../../components/Viewports';

import { displayInitAuthModal } from 'src/actions';
import { initAuthModalVisibleSelector } from 'src/selectors/app';
import InitAuth from 'src/components/InitAuth';
import InitAuthMobile from 'src/components/InitAuthMobile';
import InitAuthCategories from 'src/components/InitAuthCategories';

import './style.scss';

const InitAuthModal = () => {
	const dispatch = useDispatch();
	const initAuthModalVisible = useSelector(initAuthModalVisibleSelector);

	return (
		<ReactModal
			isOpen={initAuthModalVisible}
			portalClassName='init-auth-modal__portal'
			className='init-auth-modal'
			overlayClassName='init-auth-modal__overlay'
			ariaHideApp={false}
			onRequestClose={() => dispatch(displayInitAuthModal(false))}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			shouldFocusAfterRender={false}
		>
			<FontAwesomeIcon
				icon={faTimes}
				className="init-auth-modal__close-btn"
				onClick={() => dispatch(displayInitAuthModal(false))}
			/>
			<Mobile>
				<InitAuthMobile />
			</Mobile>
			<Tablet>
				<InitAuthMobile />
			</Tablet>
			<Desktop>
				<InitAuth />
				<InitAuthCategories />
			</Desktop>
		</ReactModal>
	);
};



export default InitAuthModal;
