import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const LoginModal = ({ setOpenLoginModal, openLoginModal }) => {

	const handleLogin = (loginSource) => {
		window.open(`${process.env.REACT_APP_API}auth/login/${loginSource}`, '_self');
	};

	return (
		<ReactModal
			isOpen={openLoginModal}
			portalClassName='mh-header-login-modal__portal'
			className='mh-header-login-modal'
			overlayClassName='mh-header-login-modal__overlay'
			ariaHideApp={false}
			onRequestClose={() => setOpenLoginModal(false)}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<FontAwesomeIcon icon={faTimes} className="close_btn" onClick={() => setOpenLoginModal(false)} />

			<p className="mh-login-modal__header">
				Xoş Gəlmişsiniz.
			</p>
			<p className="mh-login-modal__subtext">
				Fərdiləşdirilmiş xəbərlər, məqalələr və bloq paylaşımlarını almaq üçün, sevdiyiniz müəllifləri və mövzularə izləmək üçün MediaHub-a daxil olun
			</p>
			<>
				<FacebookLoginButton className="mh-login__login-btn" onClick={() => handleLogin('facebook')}>
					<span>Facebook ilə daxil ol</span>
				</FacebookLoginButton>
				<GoogleLoginButton className="mh-login__login-btn" onClick={() => handleLogin('google')}>
					<span>Google ilə daxil ol</span>
				</GoogleLoginButton>
			</>

			<Link id="contact" className="menu-item" to="/contact">
				<p className="mh-login-modal__contact">Əlaqə</p>
			</Link>
		</ReactModal>
	);
};

export default LoginModal;