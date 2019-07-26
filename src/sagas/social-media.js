import { takeLatest, put, select, call } from 'redux-saga/effects';
import {
	SM_FETCH_CONTENT,
	SM_SET_PAGINATED_CONTENT,
	SM_ERROR,
	SM_SET_PAGINATED_CONTENT_HAS_MORE,
} from '../constants/social-media';

function* fetchPaginatedSMContent() {
	const url = `${process.env.REACT_APP_API}social-media/get/content/paginated`;
	const state = yield select();

	const body = {
		page: state.articlesState.nextPage,
		limit: 10,
		lang: 'az',
	};

	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json; charset=utf-8',
	};
	
	let errorOccured = false;
	const paginatedRawContent = yield fetch(url, {
		method: 'POST',
		cache: 'default',
		headers,
		body: JSON.stringify(body),
	})
		.then(r => {
			if (r.status !== 200) {
				console.log('failed while fetching data from api');
				errorOccured = true;
				return;
			}
			return r.json();
		});
	console.log('paginatedRawContent', paginatedRawContent);

	if (errorOccured) {
		yield put({ type: SM_ERROR });
	}
	
	let content = [];
	if (paginatedRawContent && paginatedRawContent.docs) {
		content = paginatedRawContent.docs;
		yield put({ type: SM_SET_PAGINATED_CONTENT, content });
	}
	paginatedRawContent.page !== paginatedRawContent.pages && (
		yield put({ type: SM_SET_PAGINATED_CONTENT_HAS_MORE, nextPage: paginatedRawContent.page + 1 })
	);
}


export const socialMediaSagas = [
	takeLatest(SM_FETCH_CONTENT, fetchPaginatedSMContent),
];