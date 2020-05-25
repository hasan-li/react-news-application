import { takeLatest, put, call } from 'redux-saga/effects';
import Cookies from 'universal-cookie';

import {
	GET_USER,
	USER_RECEIVED,
	SET_USER_SELECTED_CATEGORIES,
	SET_USER_SELECTED_CATEGORIES_SUCCESS,
	SET_USER_SELECTED_CATEGORIES_ERROR,
} from '../constants/user';

import {
	CLEAR,
	FETCH_PAGINATED,
	SET_NEXT_PAGINATION_PAGE,
} from '../constants/news';

const cookies = new Cookies();

function* getUser() {
	let token;
	if (cookies.get('token')) {
		token = cookies.get('token');
	}
	const userUrl = `${process.env.REACT_APP_API}auth/me`;

	const user = yield fetch(userUrl, {
		method: 'GET',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
			'Authorization': `Bearer ${token}`
		},
	})
		.then(r => {
			if (r.status !== 200) {
				console.log('failed while getting user\'s data', r.status);
				return;
			}
			return r.json();
		});
	yield put({ type: USER_RECEIVED, user: user, });
}

function* setUserCategories(action) {
	let token;
	if (cookies.get('token')) {
		token = cookies.get('token');
	}
	const url = `${process.env.REACT_APP_API}categories/user/set/`;
	const body = {
		categories: action.selectedCategories,
		deselected: action.deselectedCategories,
	};

	const response = yield fetch(url, {
		method: 'POST',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
			'Authorization': `Bearer ${token}`,
		},
		body: JSON.stringify(body)
	});

	if (response.status !== 200) {
		console.log('failed while fetching data from api', response.status);
		yield put({ type: SET_USER_SELECTED_CATEGORIES_ERROR, error: true });
		return;
	}

	const setCategoryResult = yield response.json();

	if (setCategoryResult.status !== 'ok') {
		yield put({ type: SET_USER_SELECTED_CATEGORIES_ERROR, error: true });
		return;
	}
	yield call(getUser);
	yield put({ type: CLEAR });
	yield put({ type: SET_USER_SELECTED_CATEGORIES_SUCCESS, success: true });
	yield put({ type: SET_NEXT_PAGINATION_PAGE, nextPage: 1 });
	yield put({ type: FETCH_PAGINATED });
}

export const userSagas = [
	takeLatest(GET_USER, getUser),
	takeLatest(SET_USER_SELECTED_CATEGORIES, setUserCategories),
];
