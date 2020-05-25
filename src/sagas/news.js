import { takeLatest, put, select, call, takeLeading } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import axios from 'axios';

import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	// SET_MAIN_NEWS,
	SET_PAGINATED_HAS_MORE,
	SET_NEXT_PAGINATION_PAGE,
	REFRESH,
	ARTICLE_LOADING,
	INCREMENT_CLICK_NUMBER,
	CLEAR,
	FETCH_SINGLE,
	SET_SINGLE,
} from '../constants/news';

const cookies = new Cookies();

function* fetchPaginatedNews() {
	// TODO uncomment when want to get data also from social media
	// const url = `${process.env.REACT_APP_API}news/all/sources/`;
	const url = `${process.env.REACT_APP_API}news/get/paginated`;
	const state = yield select();

	const token = cookies.get('token');
	const body = {
		page: state.articlesState.nextPage,
		limit: 10,
		lang: ['az'],
		categoryIds: !token && state.auth.selectedCategories,
	};
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json; charset=utf-8',
	};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	
	const paginatedRawContent = yield fetch(url, {
		method: 'POST',
		cache: 'default',
		headers,
		body: JSON.stringify(body),
	})
		.then(r => {
			if (r.status !== 200) {
				console.log('failed while fetching data from api');
				return;
			}
			return r.json();
		});

	let articles = paginatedRawContent.docs;
	
	// const mainNews = [];
	// check if main news are needed to be set
	// if (paginatedRawContent.page === 1) {
	// 	articles = articles.reduce((result, article) => {
	// 		if (
	// 			((article.description
	// 			&& article.description.length > 100)
	// 			&& article.image && article.image !== '')
	// 			&& mainNews.length < 4
	// 		) {
	// 			const newsExists = mainNews.find(a => a._id === article._id);
	// 			if (!newsExists) mainNews.push(article);
	// 		} else {
	// 			result.push(article);
	// 		}
	// 		return result;
	// 	}, []);

	// 	yield call(setMainNews, mainNews);
	// }

	if (paginatedRawContent && paginatedRawContent.docs) {
		yield put({ type: SET_PAGINATED, news: articles });
	}
	yield put({ type: SET_PAGINATED_HAS_MORE, hasMore: !(paginatedRawContent.page === paginatedRawContent.pages)});
	paginatedRawContent.page !== paginatedRawContent.pages && (
		yield put({ type: SET_NEXT_PAGINATION_PAGE, nextPage: paginatedRawContent.page + 1 })
	);
}

// function* setMainNews(mainNews) {
// 	yield put({ type: SET_MAIN_NEWS, mainNews});
// }

function* refreshPaginatedNews() {
	yield put({ type: ARTICLE_LOADING, loadingArticles: true });
	yield put({ type: CLEAR });
	yield put({ type: SET_NEXT_PAGINATION_PAGE, nextPage: 1 });
	yield put({ type: SET_PAGINATED_HAS_MORE, hasMore: true });
}

function* fetchArticle(action) {
	yield put({ type: ARTICLE_LOADING, loadingArticles: true });

	const url = `${process.env.REACT_APP_API}news/get/article?id=${action.articleId}`;
	const article = yield fetch(url, {
		method: 'GET',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		}
	})
		.then(r => {
			if (r.status !== 200) {
				console.log('failed while fetching data from api');
				return;
			}
			return r.json();
		});

	// TODO: create actions and reducer for error handling
	if (!article || !article._id) {
		console.log('ERROR WHILE LOADING ARTICLE');
		return;
	}

	yield put({ type: SET_SINGLE, article });
}

function* incrementClick({ type, id }) {
	const url = `${process.env.REACT_APP_API}news/increment/click?id=${id}`;
	try {
		yield axios({
			method: 'GET',
			url,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json; charset=utf-8',
			},
		});
	} catch (e) {
		console.log('error occured', type);
	}
}

export const newsSagas = [
	takeLeading(FETCH_PAGINATED, fetchPaginatedNews),
	takeLeading(REFRESH, refreshPaginatedNews),
	takeLatest(FETCH_SINGLE, fetchArticle),
	takeLatest(INCREMENT_CLICK_NUMBER, incrementClick),
];
