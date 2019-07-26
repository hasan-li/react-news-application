import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from 'react-device-detect';

import Granim from 'granim';

import {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayLoginCategorySelection,
	refreshNews,
} from '../../actions';

import CategoryItem from '../../components/CategoryItem';

import './style.css';

const illustration_window = require('./../../public/assets/illustrations/undraw_welcome_3gvl.svg');
const illustration_door = require('./../../public/assets/illustrations/undraw_login_jdch.svg');

const LoginCategorySelection = ({
	allCategories,
	user,
	setUserSelectedCategories,
	displayLoginCategorySelection,
	loginCategorySelectionVisible,
	addUserSelectedCategories,
	refreshNews,
}) => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [categoryView, setCategoryView] = useState(null);

	useEffect(() => {
		if (allCategories.length > 0) {
			const renderedCategories = getCategories();
			setCategoryView(renderedCategories);
		}
	}, [allCategories]);

	useEffect(() => {
		if (loginCategorySelectionVisible && isBrowser) {
			setTimeout(() => {
				new Granim({
					element: '#canvas-basic',
					direction: 'left-right',
					isPausedWhenNotInView: true,
					states : {
						'default-state': {
							gradients: [
								[
									{color: '#ec6b64', pos: .05},
									{color: '#f2f2f2', pos: .45},
									{color: '#f2f2f2', pos: 1},
								],
								[
									{color: '#8690ba', pos: .05},
									{color: '#f2f2f2', pos: .45},
									{color: '#f2f2f2', pos: 1},
								],
							],
							transitionSpeed: 7000
						}
					}
				});	
			}, 50);
		} else if (isMobile) {
			setTimeout(() => {
				new Granim({
					element: '#canvas-basic',
					direction: 'custom',
					customDirection: {
						x0: '100%',
						y0: '95%',
						x1: '100%',
						y1: '10%'
					},
					isPausedWhenNotInView: true,
					states : {
						'default-state': {
							gradients: [
								[
									{color: '#ec6b64', pos: .05},
									{color: '#f2f2f2', pos: .4},
									{color: '#f2f2f2', pos: 1},
								],
								[
									{color: '#8690ba', pos: .05},
									{color: '#f2f2f2', pos: .4},
									{color: '#f2f2f2', pos: 1},
								],
							],
							transitionSpeed: 7000
						}
					}
				});	
			}, 50);
		}
	}, [loginCategorySelectionVisible]);

	const getCategories = () => {
		return allCategories.map(category => (
			<CategoryItem
				key={category._id}
				name={category.name}
				id={category._id}
				addSelectedCategory={addSelectedCategory}
				removeSelectedCategory={removeSelectedCategory}
				label={category.label ? category.label['az'] : undefined}
			/>
		));
	};

	const submitSelectedCategories = () => {
		if (user && user._id) {
			setUserSelectedCategories(selectedCategories);
		} else {
			addUserSelectedCategories(selectedCategories);
		}

		displayLoginCategorySelection(false);
		refreshNews();
	};

	const addSelectedCategory = (id) => {
		selectedCategories.push(id);
		setSelectedCategories(selectedCategories);
	};

	const removeSelectedCategory = (id) => {
		const index = selectedCategories.indexOf(id);
		if (index > -1) {
			selectedCategories.splice(index, 1);
		}
		setSelectedCategories(selectedCategories);
	};

	const handleLogin = (loginSource) => {
		window.open(`${process.env.REACT_APP_API}auth/login/${loginSource}`, '_self');
	};

	const userGreeting = () => {
		return (
			<>
				<div className="mh-login-category-selection__login-header">
					{!user ? (
						<>
							<p className="header">
								Daxil Olun
							</p>
							<p className="header__sub">
								Daimi olaraq istədiyinizi oxumaq üçün
							</p>
						</>
					) : (
						<p className="header">
							{'Salam '}
							{user ? (user.firstName || user.displayName) : 'dost'}!
						</p>
					)}
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						{!user ? (
							<>
								<FacebookLoginButton className="mh-login__login-btn" onClick={() => handleLogin('facebook')}>
									<span>Facebook ilə daxil ol</span>
								</FacebookLoginButton>
								<GoogleLoginButton className="mh-login__login-btn" onClick={() => handleLogin('google')}>
									<span>Google ilə daxil ol</span>
								</GoogleLoginButton>
								
							</>
						) : (
							<>
								{(user.categories && user.categories.length === 0) && (
									<p className="mg_login-category-selection__no-categ-selected">
										Hal hazırda siz heç bir kateqoriya seçməmisinz. Seçin və ya bütün kateqoriyalardan xəbərlərə keçin
									</p>
								)}
							</>
						)}
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						{user ? (
							<img
								src={illustration_window}
								className="category-selection__user-selection-illustration"
								alt="User selected news"
							/>
						) : (
							<img
								src={illustration_door}
								className="category-selection__user-selection-illustration"
								alt="User selected news"
							/>
						)}
					</div>
				</div>
				<div className="row mh-login-category-selection__contact-about">
					<div className="col-md-3" />
					<div className="col-md-3" >
						<Link to="/contact">
							<p className="mh-login-category-selection__contact-about-link">
									Əlaqə
							</p>
						</Link>
					</div>
					<div className="col-md-3">
						<Link to="/about">
							<p className="mh-login-category-selection__contact-about-link">
								Haqqımızda
							</p>
						</Link>
					</div>
					<div className="col-md-3" />
				</div>
			</>
		);
	};

	const loginMobileButtons = () => (
		!user ? (
			<>
				<FacebookLoginButton className="mh-login__login-btn" onClick={() => handleLogin('facebook')}>
					<span>Facebook ilə daxil ol</span>
				</FacebookLoginButton>
				<GoogleLoginButton className="mh-login__login-btn google" onClick={() => handleLogin('google')}>
					<span>Google ilə daxil ol</span>
				</GoogleLoginButton>
				
			</>
		) : (
			<>
				{(user.categories && user.categories.length === 0) && (
					<p>
						Hal hazırda siz heç bir kateqoriya seçməmisinz. Seçin və ya bütün kateqoriyalardan xəbərlərə keçin
					</p>
				)}
			</>
		)
	);

	return(
		<ReactModal
			isOpen={loginCategorySelectionVisible}
			portalClassName='mh-login-class-selection__modal__portal'
			className='mh-login-class-selection__modal'
			overlayClassName='mh-login-class-selection__modal__overlay'
			ariaHideApp={false}
			onRequestClose={() => displayLoginCategorySelection(false)}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<canvas id="canvas-basic"></canvas>
			<FontAwesomeIcon icon={faTimes} className="close_btn" onClick={() => displayLoginCategorySelection(false)} />
			
			<BrowserView>
				<div className="category-selection-login row">
					<div className="col-lg-3 col-md-3 col-sm-12 login">
						{userGreeting()}
					</div>
					<div className="col-lg-9 col-md-9 col-sm-10">
						<div className="categories-selection">
							<p className="header">
								Kateqoriyaları seçin
							</p>
							<div className="category-selection__categories">
								{categoryView}
							</div>
							<div className="mh-category-selection-login__action-btn" onClick={submitSelectedCategories}>
								Xəbərlərə keç
							</div>
						</div>
					</div>
				</div>
			</BrowserView>

			<MobileView>
				<div className="category-selection-login categories-selection">
					<p className="header">
						Kateqoriyaları seçin
					</p>
					<div className="modal_content">
						<div className="category-selection__categories">
							{categoryView}
						</div>
					</div>
				</div>
				<div className="modal_action__block">
					<div className="mh-category-selection-login__action-btn" onClick={submitSelectedCategories}>
						Xəbərlərə keç
					</div>
					{loginMobileButtons()}
				</div>
			</MobileView>
		</ReactModal>
	);
};

const mapDispatchToProps = {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayLoginCategorySelection,
	refreshNews,
};

const mapStateToProps = (state) => {
	return ({
		user: state.userState.user,
		allCategories: state.categoryState.allCategories,
		loginCategorySelectionVisible: state.generalState.loginCategorySelectionVisible,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginCategorySelection);
