import React from 'react';

import './style.css';

const leftArrowIcon = require('../../public/assets/icon/left_arrow.svg');

const LeftCarouselArrow = ({ className, style, onClick }) => (
	<img
		src={leftArrowIcon}
		style={{ ...style, display: 'block', }}
		className={`${className} mh-carousel__arrow-icon`}
		onClick={onClick}
	/>
);

export default LeftCarouselArrow;
