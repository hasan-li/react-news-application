import { takeLatest, put } from 'redux-saga/effects';

import {
	GET_ALL_CATEGORIES,
	SET_ALL_CATEGORIES,
} from '../constants/categories';

function* getAllCategories() {
	const url = `${process.env.REACT_APP_API}categories/get/all`;
	const allCategories = yield fetch(url, {
		method: 'GET',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		}
	}).then(r => {
		if (r.status !== 200) {
			console.log('failed while getting all categories', r.status);
			return;
		}
		return r.json();
	});
	yield put({ type: SET_ALL_CATEGORIES, allCategories, });
}

export const categoriesSagas = [
	takeLatest(GET_ALL_CATEGORIES, getAllCategories),
];
