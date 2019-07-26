import { union } from 'lodash';

import {
	FETCH_PAGINATED_NEWS,
	SET_PAGINATED_NEWS,
	SET_MAIN_NEWS,
	SET_PAGINATED_NEWS_HAS_MORE,
	LOADING_ARTICLES,
	SM_SET_NEXT_PAGINATION_PAGE,
	CLEAR_NEWS,
	SET_SINGLE_ARTICLE,
	ERROR_NEWS,
} from '../constants/news';

const initialState = {
	news: [],
	mainNews: [],
	nextPage: 1,
	hasMore: false,
	loadingArticles: true,
	singleArticle: undefined,
	error: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_PAGINATED_NEWS: {
		return {
			...state,
			loadingArticles: true,
		};
	}
	case SET_PAGINATED_NEWS: {
		const news = union(state.news, action.news);
		return {
			...state,
			news: [...news],
			loadingArticles: false,
		};
	}
	case SET_MAIN_NEWS: {
		return {
			...state,
			mainNews: [...action.mainNews],
		};
	}
	case SET_PAGINATED_NEWS_HAS_MORE: {
		return {
			...state,
			hasMore: action.hasMore,
		};
	}
	case LOADING_ARTICLES: {
		return {
			...state,
			loadingArticles: action.loadingArticles,
		};
	}
	case SM_SET_NEXT_PAGINATION_PAGE: {
		return {
			...state,
			nextPage: action.nextPage,
		};
	}
	case CLEAR_NEWS: {
		return {
			...state,
			news: [],
		};
	}
	case SET_SINGLE_ARTICLE: {
		return {
			...state,
			singleArticle: action.article,
			loadingArticles: false,
		};
	}
	case ERROR_NEWS: {
		return {
			...state,
			error: action.error
		};
	}
	default:
		return state;
	}
};

export default reducer;