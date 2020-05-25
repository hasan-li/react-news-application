import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import CategoryItem from '../../components/CategoryItem';
import HeaderMetaTags from '../../components/HeaderMetaTags';

import 'react-web-tabs/dist/react-web-tabs.css';
import './style.css';

import {
	setUserSelectedCategories,
	setUserSelectedCategoriesSuccess,
	setUserSelectedCategoriesError,
} from '../../actions';

const UserCabinet = ({
	user,
	allCategories,
	setUserSelectedCategories,
	setUserSelectedCategoriesSuccess,
	setUserSelectedCategoriesError,
	userCategoriesSetSuccess,
	userCategoriesSetError,
}) => {
	const [categories, setCategories] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [deselectedCategories, setDeselectedCategories] = useState([]);

	const isMobile = useMediaQuery({ maxWidth: 767 });

	useEffect(() => {
		if (user) {
			const renderedCategories = getCategories();
			setCategories(renderedCategories);
		}
	}, [allCategories]);

	useEffect(() => {
		if (userCategoriesSetSuccess) {
			NotificationManager.success('Məqalələrə qayıda bilərsiniz', 'Yadda saxlandı', 4000);
			setUserSelectedCategoriesSuccess(false);
		}
	}, [userCategoriesSetSuccess]);

	useEffect(() => {
		if (userCategoriesSetError) {
			NotificationManager.error('Problem yarandı', 'Səhifəni yeniləyin', 8000);
			setUserSelectedCategoriesError(false);
		}
	}, [userCategoriesSetError]);

	const getCategories = () => {
		return allCategories.map(category => (
			<CategoryItem
				key={category._id}
				name={category.name}
				id={category._id}
				userCategories={user ? user.categories : []}
				addSelectedCategory={(id) => addSelectedCategory(id)}
				removeSelectedCategory={(id) => removeSelectedCategory(id)}
				label={category.label ? category.label['az'] : undefined}
			/>
		));
	};

	const addSelectedCategory = (id) => {
		const index = deselectedCategories.indexOf(id);
		if (index > -1) {
			deselectedCategories.splice(index, 1);
			setDeselectedCategories(deselectedCategories);
		}
		selectedCategories.push(id);
		setSelectedCategories(selectedCategories);
	};
	
	const removeSelectedCategory = (id) => {
		const index = selectedCategories.indexOf(id);
		if (index > -1) {
			selectedCategories.splice(index, 1);
			setDeselectedCategories(deselectedCategories);
		}
		deselectedCategories.push(id);
		setSelectedCategories(selectedCategories);
	};

	return(
		<>
			<HeaderMetaTags title='Şəxsi Kabinet' />
			<Tabs defaultTab="userInfo" vertical={!isMobile}>
				<TabList>
					<Tab tabFor="userInfo">Hesab</Tab>
					<Tab tabFor="categories">Kateqoriyalar</Tab>
				</TabList>
				<TabPanel tabId="categories">
					<div className="category-selection__categories">
						{categories}
					</div>
					<div className="user-cabinet__save-btn" onClick={() => setUserSelectedCategories(selectedCategories, deselectedCategories)}>
						Yadda saxla
					</div>
				</TabPanel>
				<TabPanel tabId="userInfo">
					{user && (
						<div className="row">
							<div className="col-md-5 col-sm-12">
								{user.picture && (
									<img src={user.picture} className="user-cabinet__user-profile-pic" alt="User avatar" />
								)}
							</div>
							<div className="col-md-7 col-sm-12 user-cabinet__user-info">
								<p className="user-cabinet__user-name">
									{user.displayName || user.firstName}
								</p>
								<p className="user-cabinet__user-data-item">
									{user.email}
								</p>
							</div>
						</div>
					)}
				</TabPanel>
			</Tabs>
			<NotificationContainer />
		</>
	);
};

const mapDispatchToProps = {
	setUserSelectedCategories,
	setUserSelectedCategoriesSuccess,
	setUserSelectedCategoriesError,
};

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		allCategories: state.categories.allCategories,
		userCategoriesSetSuccess: state.auth.userCategoriesSetSuccess,
		userCategoriesSetError: state.auth.userCategoriesSetError,
	});
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(UserCabinet);
