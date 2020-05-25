import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import TextLoop from 'react-text-loop';

import {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayInitAuthModal,
	refreshNews,
} from 'src/actions';
import { allCategoriesSelector } from 'src/selectors/categories';
import GoogleLoginButton from 'src/components/SocialMediaButtons/GoogleLoginButton';
import FacebookLoginButton from 'src/components/SocialMediaButtons/FacebookLoginButton';

import { GOOGLE, FACEBOOK } from 'src/constants/socialMedia';

import './style.scss';

const reading_from_tablet = require('./../../public/assets/illustrations/reading_from_tablet.png');

const InitAuth = () => {
	const [categoriesLoaded, setCategoriesLoaded] = useState(false);
	const allCategories = useSelector(allCategoriesSelector);

	useEffect(() => {
		if (allCategories.length > 0) {
			setCategoriesLoaded(true);
		}
	}, [allCategories]);

	const handleLogin = (loginSource) => {
		window.open(`${process.env.REACT_APP_API}auth/login/${loginSource}`, '_self');
	};

	const loopingCategories = () =>
		allCategories.map(({ label }) => label['az']);

	return (
		<div className="init-auth-anon">
			<div className="init-auth-anon__header">
				Daxil ol və {' '}
				<div className="init-auth-anon__header__highlighted">
					#{categoriesLoaded && (
						<TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
							{loopingCategories()}
						</TextLoop>
					)}
					{' '}
				</div>
				xəbərlərini kəşf et
			</div>

			<div className="init-auth-anon__login-buttons">
				<FacebookLoginButton onClick={() => handleLogin(FACEBOOK)}>
					<span>Facebook ilə daxil ol</span>
				</FacebookLoginButton>
				<GoogleLoginButton onClick={() => handleLogin(GOOGLE)}
				>
					<span>Google ilə daxil ol</span>
				</GoogleLoginButton>
			</div>
			<img src={reading_from_tablet} className="init-auth-anon__welcome-image" />
		</div>
	);
};

const mapDispatchToProps = {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayInitAuthModal,
	refreshNews,
};

export default connect(
	null,
	mapDispatchToProps,
)(InitAuth);
