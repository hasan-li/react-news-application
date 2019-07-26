import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import {
	setUserSelectedCategories,
	addUserSelectedCategories,
	refreshNews,
} from '../../actions';

import './style.css';

const CategorySelectionItem = ({
	allCategories,
	selectedCategories,
	user,

	setUserSelectedCategories,
	addUserSelectedCategories,
	refreshNews,
}) => {

	const [highlightedCategories, setHighlightedCategories] = useState([]);

	useEffect(() => {
		if (allCategories.length > 0) {
			// Shuffle array
			const shuffled = allCategories.sort(() => 0.5 - Math.random());
			// Get sub-array of first n elements after shuffled
			const highligtCats = shuffled.slice(0, 3);
			setHighlightedCategories(highligtCats);
			
		}
	}, [allCategories]);

	const submitSelectedCategory = (id) => {
		if (user && user._id) {
			setUserSelectedCategories([id]);
		} else {
			addUserSelectedCategories([id]);
		}
		refreshNews();
	};

	return (
		<div className="mh-small-category-selection-item">
			{highlightedCategories.map((c, i) =>
				<div key={c._id}>
					<div key={c._id}
						className="category"
						onClick={() => submitSelectedCategory(c._id)}
					>
						<MdAddCircleOutline className="add-icon" />
						<p className="category-label">
							#{c.label ? c.label['az'] : c.name}
						</p>
					</div>
					{i < 2 && (<div className="separator" />)}
				</div>
			)}
		</div>
	);
};

const mapDispatchToProps = {
	setUserSelectedCategories,
	addUserSelectedCategories,
	refreshNews,
};

const mapStateToProps = (state) => {
	return ({
		user: state.userState.user,
		allCategories: state.categoryState.allCategories,
		selectedCategories: state.userState.user ? state.userState.user.categories : state.userState.selectedCategories,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CategorySelectionItem);

// export default CategorySelectionItem;