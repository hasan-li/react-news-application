import { union } from 'lodash';

import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	// SET_MAIN_NEWS,
	SET_PAGINATED_HAS_MORE,
	ARTICLE_LOADING,
	SET_NEXT_PAGINATION_PAGE,
	CLEAR,
	SET_SINGLE,
	ERROR,
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
		case FETCH_PAGINATED: {
			return {
				...state,
				loadingArticles: true,
			};
		}
		case SET_PAGINATED: {
			const news = union(state.news, action.news);
			return {
				...state,
				news,
				loadingArticles: false,
			};
		}
		// case SET_MAIN_NEWS: {
		// 	return {
		// 		...state,
		// 		mainNews: [...action.mainNews],
		// 	};
		// }
		case SET_PAGINATED_HAS_MORE: {
			return {
				...state,
				hasMore: action.hasMore,
			};
		}
		case ARTICLE_LOADING: {
			return {
				...state,
				loadingArticles: action.loadingArticles,
			};
		}
		case SET_NEXT_PAGINATION_PAGE: {
			return {
				...state,
				nextPage: action.nextPage,
			};
		}
		case CLEAR: {
			return {
				...state,
				news: [],
			};
		}
		case SET_SINGLE: {
			return {
				...state,
				singleArticle: action.article,
				loadingArticles: false,
			};
		}
		case ERROR: {
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