import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	SET_PAGINATED_HAS_MORE,
	ARTICLE_LOADING,
	REFRESH,
	CLEAR,
	FETCH_SINGLE,
	SET_SINGLE,
	INCREMENT_CLICK_NUMBER,
	ERROR,
} from '../constants/news';

export const fetchPaginatedNews = () => ({
	type: FETCH_PAGINATED,
});

export const setPaginatedNews = (news) => ({
	type: SET_PAGINATED,
	news,
});

export const setPaginatedNewsHaveMore = (hasMore) => ({
	type: SET_PAGINATED_HAS_MORE,
	hasMore,
});

export const setLoadingArticles = (loadingArticles) => ({
	type: ARTICLE_LOADING,
	loadingArticles,
});

export const refreshNews = () => ({
	type: REFRESH,
});

export const clearNews = () => ({
	type: CLEAR,
});

export const fetchArticle = (articleId) => ({
	type: FETCH_SINGLE,
	articleId,
});

export const setArticle = (article) => ({
	type: SET_SINGLE,
	article,
});

export const setNewsError = (error) => ({
	type: ERROR,
	error,
});

export const incrementArticleClick = (id) => ({
	type: INCREMENT_CLICK_NUMBER,
	id,
});
