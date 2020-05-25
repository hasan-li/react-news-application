import React, { useState, useEffect } from 'react';

import MainPage from '../MainPage';
import InitAuthModal from '../InitAuthModal';
import HeaderMetaTags from '../../components/HeaderMetaTags';

import './style.css';

const Root = ({
	initAuthModalVisible,
	loginModalOpen,
}) => {
	const [displayInitAuthModalModal, setDisplayLoginCategorySelectionModal] = useState(false);
	useEffect(() => {
		if (initAuthModalVisible && !loginModalOpen) {
			setTimeout(() => {
				setDisplayLoginCategorySelectionModal(true);
			}, 5000);
		} else {
			setDisplayLoginCategorySelectionModal(false);

		}
	}, [initAuthModalVisible, loginModalOpen]);

	return (
		<>
			<HeaderMetaTags />
			<div id="App page-wrap" className="App">
				<MainPage />
				{displayInitAuthModalModal &&
					<InitAuthModal />
				}
			</div>
		</>
	);
}

export default Root;