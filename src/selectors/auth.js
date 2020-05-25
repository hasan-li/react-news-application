import { createSelector } from 'reselect';
import getFp from 'lodash/fp/get';

import { REDUCER_KEY as AUTH_REDUCER_KEY } from '../constants/user';

export const authSelector = getFp(
	AUTH_REDUCER_KEY,
);

export const userSelector = createSelector(
	authSelector,
	getFp('user'),
);