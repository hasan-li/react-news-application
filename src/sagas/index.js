import { all } from 'redux-saga/effects';

import { userSagas } from './user';
import { categoriesSagas } from './categories';
import { newsSagas } from './news';

export default function* rootSaga() {
	yield all([
		...userSagas,
		...categoriesSagas,
		...newsSagas,
	]);
}