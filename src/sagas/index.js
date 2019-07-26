import { all } from 'redux-saga/effects';

import { userSagas } from './user';
import { categoriesSagas } from './categories';
import { newsSagas } from './news';
import { socialMediaSagas } from './social-media';

export default function* rootSaga() {
	yield all([
		...userSagas,
		...categoriesSagas,
		...newsSagas,
		...socialMediaSagas,
	]);
}