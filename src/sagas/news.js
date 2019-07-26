import { takeLatest, put, select, call } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import {
	FETCH_PAGINATED_NEWS,
	SET_PAGINATED_NEWS,
	SET_MAIN_NEWS,
	SET_PAGINATED_NEWS_HAS_MORE,
	SM_SET_NEXT_PAGINATION_PAGE,
	REFRESH_NEWS,
	LOADING_ARTICLES,
	CLEAR_NEWS,
	FETCH_SINGLE_ARTICLE,
	SET_SINGLE_ARTICLE,
} from '../constants/news';

const cookies = new Cookies();

function* fetchPaginatedNews() {
	const url = `${process.env.REACT_APP_API}news/get/paginated`;
	const state = yield select();

	const token = cookies.get('token');
	const body = {
		page: state.articlesState.nextPage,
		limit: 10,
		lang: 'az',
		categoryIds: !token && state.userState.selectedCategories,
	};

	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json; charset=utf-8',
	};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	
	const paginatedRawNews = yield fetch(url, {
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

	let news = paginatedRawNews.docs;
	const mainNews = [];
	// check if main news are needed to be set
	if (paginatedRawNews.page === 1) {
		news = news.reduce((result, article) => {
			if (
				(article.description
				&& article.description.length > 100)
				|| article.image
			) {
				const newsExists = mainNews.find(a => a._id === article._id);
				if (!newsExists) mainNews.push(article);
			} else {
				result.push(article);
			}
			return result;
		}, []);

		yield call(setMainNews, mainNews);
	}
	yield put({ type: SET_PAGINATED_NEWS, news: news });
	yield put({ type: SET_PAGINATED_NEWS_HAS_MORE, hasMore: !(paginatedRawNews.page === paginatedRawNews.pages)});
	paginatedRawNews.page !== paginatedRawNews.pages && (
		yield put({ type: SM_SET_NEXT_PAGINATION_PAGE, nextPage: paginatedRawNews.page + 1 })
	);
}

function* setMainNews(mainNews) {
	yield put({ type: SET_MAIN_NEWS, mainNews});
}

function* refreshPaginatedNews() {
	yield put({ type: LOADING_ARTICLES, loadingArticles: true });
	yield put({ type: CLEAR_NEWS });
	yield put({ type: SM_SET_NEXT_PAGINATION_PAGE, nextPage: 1 });
	yield put({ type: SET_PAGINATED_NEWS_HAS_MORE, hasMore: true });

	yield call(fetchPaginatedNews);
}

function* fetchArticle(action) {
	yield put({ type: LOADING_ARTICLES, loadingArticles: true });

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

	yield put({ type: SET_SINGLE_ARTICLE, article });
}

export const newsSagas = [
	takeLatest(FETCH_PAGINATED_NEWS, fetchPaginatedNews),
	takeLatest(REFRESH_NEWS, refreshPaginatedNews),
	takeLatest(FETCH_SINGLE_ARTICLE, fetchArticle),
];
