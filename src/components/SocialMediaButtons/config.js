import { createSvgIcon } from 'react-social-login-buttons';

import { GOOGLE } from '../../constants/socialMedia';
import {ReactComponent as google_icon} from './../../public/assets/social_media/google.svg';
import {ReactComponent as facebook_icon} from './../../public/assets/social_media/facebook.svg';

export const getConfig = source => {
	const icon = source === GOOGLE ? google_icon : facebook_icon;

	return {
		activeStyle: {
			border: '1px solid #999999',
		},
		icon: createSvgIcon(icon),
		style: {
			boxShadow: 'none',
			background: '#fff',
			color: '#000000',
			fontSize: '1em',
			margin: '10px auto',
		},
	};
};