import React from 'react';
import ContentLoader from 'react-content-loader';

import './style.scss';

const NewsItemPlaceholder = () => (
	<div className="newsItem_placeholder">
		<ContentLoader 
			height={105}
			width={100}
			speed={4}
			primaryColor="#f1f1f1"
			secondaryColor="#dcdbdb"
			rtl={Math.random() >= 0.5}
		>
			<rect x="1" y="1" rx="0" ry="0" width="100" height="85" />
			<rect x="1" y="95" rx="0" ry="0" width="100" height="20" />
		</ContentLoader>
	</div>
);

export default NewsItemPlaceholder;
