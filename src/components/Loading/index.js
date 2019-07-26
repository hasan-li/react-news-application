import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import './style.css';

const Loading = () => (
	<div className="loading-spinner" key={0}>
		<BeatLoader
			className=""
			sizeUnit={"px"}
			size={20}
			color={'#200F24'}
		/>
	</div>
);

export default Loading;