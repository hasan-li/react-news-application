import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
	setBurgerMenuStatus
} from '../../actions';

import './style.css';

const mhWhiteIcon = require('./../../public/assets/icon/mh_white__icon.png');
const burgerMenuIcon = require('./../../public/assets/icon/burger-menu.svg');
const closeIcon = require('./../../public/assets/icon/cross-out.svg');

const BurgerMenu = ({ user, burgerMenuIsOpen, setBurgerMenuStatus }) => {

	const isMenuOpen = function(state) {
		console.log(state);
		setBurgerMenuStatus(state.isOpen);
	};

	return (
		<Menu
			pageWrapId={"page-wrap"}
			outerContainerId={"App"}
			width={'100%'}
			isOpen={burgerMenuIsOpen}
			onStateChange={ isMenuOpen }
			customBurgerIcon={ <img src={burgerMenuIcon} alt='MediaHub burger menu icon' /> }
			customCrossIcon={ <img src={closeIcon} alt='MediaHub close icon' /> }
		>
			<Link id="home" className="mh-burger-menu__menu-item" to="/" onClick={() => setBurgerMenuStatus(false)} >
				<FontAwesomeIcon icon={faHome} className="mh-burger-menu__icon" />
				<span className="mh-burger-menu__label">Əsas səhifə</span>
			</Link>
			{user && (
				<Link id="user-cabinet" className="mh-burger-menu__menu-item" to="/user-cabinet" onClick={() => setBurgerMenuStatus(false)} >
					<FontAwesomeIcon icon={faUser} className="mh-burger-menu__icon" />
					<span className="mh-burger-menu__label">İstifadəçi kabineti</span>
				</Link>
			)}
			<Link id="about" className="mh-burger-menu__menu-item" to="/about" onClick={() => setBurgerMenuStatus(false)} >
				<img src={mhWhiteIcon} alt='MediaHub icon' className="mh-burger-menu__icon" />
				<span className="mh-burger-menu__label">Haqqımızda</span>
			</Link>
			<Link id="contact" className="mh-burger-menu__menu-item" to="/contact" onClick={() => setBurgerMenuStatus(false)} >
				<FontAwesomeIcon icon={faEnvelope} className="mh-burger-menu__icon" />
				<span className="mh-burger-menu__label">Əlagə</span>
			</Link>
		</Menu>
	)
}

const mapDispatchToProps = {
	setBurgerMenuStatus
};

const mapStateToProps = (state) => {
	return ({
		user: state.userState.user,
		burgerMenuIsOpen: state.generalState.burgerMenuIsOpen,
	})
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BurgerMenu);
