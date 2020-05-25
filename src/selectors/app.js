import { createSelector } from 'reselect';
import getFp from 'lodash/fp/get';

import { REDUCER_KEY as APP_REDUCER_KEY } from '../constants/app';

export const appSelector = getFp(
	APP_REDUCER_KEY,
);

export const initAuthModalVisibleSelector = createSelector(
	appSelector,
	getFp('initAuthModalVisible'),
);
