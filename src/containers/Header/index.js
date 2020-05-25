import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../public/assets/logo_web.png';

import LoginModal from '../../components/LoginModal';
import { Mobile } from '../../components/Viewports';

import './style.css';

import {
	setLoginModalOpen,
} from '../../actions';

const Header = ({ user, setLoginModalOpen }) => {
	const [openLoginModal, setOpenLoginModal] = useState(false);

	const onLoginModal = (isOpen) => {
		setOpenLoginModal(isOpen);
		setLoginModalOpen(isOpen);
	};

	return (
		<>
			{openLoginModal && <LoginModal setOpenLoginModal={onLoginModal} openLoginModal={openLoginModal} />}
			<div className="row flex-nowrap">
				<div className="col-md-5 col-sm-3 col-xs-3"></div>
				<div className="col-md-2 col-sm-3 col-xs-3 logo-wrapper">
					<Link id="home" className="menu-item" to="/">
						<img src={logo} alt="MediaHub loqo" className="logo" />
					</Link>
				</div>
				<div className="col-md-5 col-sm-6 col-xs-6">
					<div className="mh-header__auth-btn">
						{user ? (
							<Link id="home" className="menu-item" to="/user-cabinet">
								<div className="mh-header__user">
									{user.picture && (
										<img src={user.picture} className="mh_header__user-profile-pic" alt="User avatar" />
									)}
									<Mobile>
										<p className="mh-header__user-name">
											{user.displayName || user.firstName}
										</p>
									</Mobile>
								</div>
							</Link>
						) : (
							<p className="mh-header__login-btn" onClick={() => onLoginModal(true)}>
								Daxil ol
							</p>
						)}
					</div>
				</div>
			</div>
			{/* <Navbar /> */}
		</>
	);
};

const mapDispatchToProps = {
	setLoginModalOpen,
};

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
