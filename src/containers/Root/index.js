import React, { useState, useEffect } from 'react';

import MainPage from '../MainPage';
import LoginCategorySelection from '../LoginCategorySelection';
import HeaderMetaTags from '../../components/HeaderMetaTags';

import './style.css';

const Root = ({
	loginCategorySelectionVisible,
	loginModalOpen,
}) => {
	const [displayLoginCategorySelectionModal, setDisplayLoginCategorySelectionModal] = useState(false);
	useEffect(() => {
		if (loginCategorySelectionVisible && !loginModalOpen) {
			setTimeout(() => {
				setDisplayLoginCategorySelectionModal(true);
			}, 5000);
		} else {
			setDisplayLoginCategorySelectionModal(false);

		}
	}, [loginCategorySelectionVisible, loginModalOpen])

	return (
		<>
			<HeaderMetaTags />
			<div id="App page-wrap" className="App">
				<MainPage />
				{displayLoginCategorySelectionModal &&
					<LoginCategorySelection />
				}
			</div>
		</>
	);
}

export default Root;