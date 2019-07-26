import React from 'react';

import './style.css';

const rightArrowIcon = require('../../public/assets/icon/right_arrow.svg');

const RightCarouselArrow = ({ className, style, onClick }) => (
	<img
		src={rightArrowIcon}
		style={{ ...style, display: 'block', }}
		className={`${className} mh-carousel__arrow-icon`}
		onClick={onClick}
	/>
);

export default RightCarouselArrow;
