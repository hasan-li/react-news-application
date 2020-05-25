import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
	setBurgerMenuStatus
} from '../../actions';

import './style.scss';

const mhWhiteIcon = require('./../../public/assets/icon/mh_white__icon.png');
const burgerMenuIcon = require('./../../public/assets/icon/burger-menu.svg');
const closeIcon = require('./../../public/assets/icon/cross-out.svg');

const BurgerMenu = ({ user, burgerMenuIsOpen, setBurgerMenuStatus }) => {

	const isMenuOpen = function(state) {
		setBurgerMenuStatus(state.isOpen);
	};

	return (
		<Menu
			pageWrapId={'page-wrap'}
			outerContainerId={'App'}
			width={'100%'}
			isOpen={burgerMenuIsOpen}
			onStateChange={ isMenuOpen }
			customBurgerIcon={ <img src={burgerMenuIcon} alt='MediaHub burger menu icon' /> }
			customCrossIcon={ <img src={closeIcon} alt='MediaHub close icon' /> }
		>
			<div className="burger-menu">
				<Link
					id="home"
					className="burger-menu__item"
					to="/"
					onClick={() => setBurgerMenuStatus(false)}
				>
					<FontAwesomeIcon icon={faHome} className="burger-menu__item__icon" />
					<p className="burger-menu__item__label">Əsas səhifə</p>
				</Link>
				{user && (
					<Link
						id="user-cabinet"
						className="burger-menu__item"
						to="/user-cabinet"
						onClick={() => setBurgerMenuStatus(false)}
					>
						<FontAwesomeIcon icon={faUser} className="burger-menu__item__icon" />
						<p className="burger-menu__item__label">İstifadəçi kabineti</p>
					</Link>
				)}
				<Link
					id="about"
					className="burger-menu__item"
					to="/about"
					onClick={() => setBurgerMenuStatus(false)}
				>
					<img src={mhWhiteIcon} alt='MediaHub icon' className="burger-menu__item__icon" />
					<p className="burger-menu__item__label">Haqqımızda</p>
				</Link>
				<Link
					id="contact"
					className="burger-menu__item"
					to="/contact"
					onClick={() => setBurgerMenuStatus(false)}
				>
					<FontAwesomeIcon icon={faEnvelope} className="burger-menu__item__icon" />
					<p className="burger-menu__item__label">Əlaqə</p>
				</Link>
			</div>
		</Menu>
	);
};

const mapDispatchToProps = {
	setBurgerMenuStatus
};

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		burgerMenuIsOpen: state.app.burgerMenuIsOpen,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BurgerMenu);
