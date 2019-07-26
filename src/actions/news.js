import {
	FETCH_PAGINATED_NEWS,
	SET_PAGINATED_NEWS,
	SET_PAGINATED_NEWS_HAS_MORE,
	LOADING_ARTICLES,
	REFRESH_NEWS,
	CLEAR_NEWS,
	FETCH_SINGLE_ARTICLE,
	SET_SINGLE_ARTICLE,
	ERROR_NEWS,
} from '../constants/news';

export const fetchPaginatedNews = () => ({
	type: FETCH_PAGINATED_NEWS,
});

export const setPaginatedNews = (news) => ({
	type: SET_PAGINATED_NEWS,
	news,
});

export const setPaginatedNewsHaveMore = (hasMore) => ({
	type: SET_PAGINATED_NEWS_HAS_MORE,
	hasMore,
});

export const setLoadinArticles = (loadingArticles) => ({
	type: LOADING_ARTICLES,
	loadingArticles,
});

export const refreshNews = () => ({
	type: REFRESH_NEWS,
});

export const clearNews = () => ({
	type: CLEAR_NEWS,
});

export const fetchArticle = (articleId) => ({
	type: FETCH_SINGLE_ARTICLE,
	articleId
});

export const setArticle = (article) => ({
	type: SET_SINGLE_ARTICLE,
	article
});

export const setNewsError = (article) => ({
	type: ERROR_NEWS,
	article
});
