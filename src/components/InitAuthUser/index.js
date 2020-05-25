import React from 'react';
import { connect, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayInitAuthModal,
	refreshNews,
} from '../../actions';
import { userSelector } from '../../selectors/auth';

import './style.scss';

const having_selection = require('./../../public/assets/illustrations/having_selection.png');

const InitAuthModal = () => {
	const user = useSelector(userSelector);

	return (
		<div className="init-auth-user">
			<div className="init-auth-user__header">
				Salam {' '}
				<p className="init-auth-user__header__user-name">
					{user.firstName}!
				</p>
			</div>
			<hr />
			<div className="init-auth-user__content">
				<div className="init-auth-user__content__text">
					<FontAwesomeIcon
						icon={faHashtag}
						className="init-auth-user__content__text__icon"
					/>
					<p className="init-auth-user__content__text__label">
						Seçin və ya bütün kateqoriyalardan xəbərlərə keçin
					</p>
				</div>
				<img src={having_selection} className="init-auth-user__content__image" />
			</div>
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
)(InitAuthModal);
