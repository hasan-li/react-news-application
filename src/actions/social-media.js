import {
	SM_FETCH_CONTENT,
	SM_SET_PAGINATED_CONTENT,
	SM_SET_PAGINATED_CONTENT_HAS_MORE,
	// LOADING_ARTICLES,
	SM_ERROR,
} from '../constants/social-media';

export const fetchSMContent = () => ({
	type: SM_FETCH_CONTENT,
});

export const setPaginatedSMContent = (news) => ({
	type: SM_SET_PAGINATED_CONTENT,
	news,
});

export const setPaginatedSMContentHaveMore = (hasMore) => ({
	type: SM_SET_PAGINATED_CONTENT_HAS_MORE,
	hasMore,
});

// export const setLoadinArticles = (loadingArticles) => ({
// 	type: LOADING_ARTICLES,
// 	loadingArticles,
// });
