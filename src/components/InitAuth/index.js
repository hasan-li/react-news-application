import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../selectors/auth';
import InitAuthUser from '../InitAuthUser';
import InitAuthAnonymous from '../InitAuthAnonymous';

import './style.scss';

const InitAuth = () => {
	const user = useSelector(userSelector);

	return (
		<div className="init-auth">
			{user ? <InitAuthUser /> : <InitAuthAnonymous />}
		</div>
	);
};


export default InitAuth;
