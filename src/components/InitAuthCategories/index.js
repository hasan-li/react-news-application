import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	setUserSelectedCategories,
	addUserSelectedCategories,
	displayInitAuthModal,
	refreshNews,
} from 'src/actions';
import { userSelector } from 'src/selectors/auth';
import { allCategoriesSelector } from 'src/selectors/categories';
import CategoryItem from 'src/components/CategoryItem';

import './style.scss';

const InitAuthCategories = () => {
	const dispatch = useDispatch();
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [categoryView, setCategoryView] = useState(null);
	const user = useSelector(userSelector);
	const allCategories = useSelector(allCategoriesSelector);

	useEffect(() => {
		if (allCategories.length > 0) {
			const renderedCategories = getCategories();
			setCategoryView(renderedCategories);
		}
	}, [allCategories]);

	const getCategories = () =>
		allCategories.map(category => (
			<CategoryItem
				key={category._id}
				name={category.name}
				id={category._id}
				addSelectedCategory={addSelectedCategory}
				removeSelectedCategory={removeSelectedCategory}
				label={category.label ? category.label['az'] : undefined}
			/>
		));

	const submitSelectedCategories = () => {
		if (user && user._id) {
			dispatch(setUserSelectedCategories(selectedCategories));
		} else {
			dispatch(addUserSelectedCategories(selectedCategories));
		}

		dispatch(displayInitAuthModal(false));
		dispatch(refreshNews());
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

	return (
		<div className="init-auth-categories">
			<p className="init-auth-categories__header">Kateqoriya seçimi</p>
			<div className="init-auth-categories__selection">
				{categoryView}
			</div>
			<div className="init-auth-categories__save__container">
				<button
					className="init-auth-categories__save__button"
					onClick={submitSelectedCategories}
				>
					Yadda saxla və Xəbərlərə keç
				</button>
			</div>
		</div>
	);
};



export default InitAuthCategories;
