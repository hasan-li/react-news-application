import { union } from 'lodash';

import {
	SM_FETCH_CONTENT,
	SM_SET_PAGINATED_CONTENT,
	SM_SET_PAGINATED_CONTENT_HAS_MORE,
	SM_LOADING_CONTENT,
	SM_SET_NEXT_PAGINATION_PAGE,
	SM_ERROR,
} from '../constants/social-media';

const initialState = {
	twitter: [],
	nextPage: 1,
	hasMore: false,
	loadingSMContent: true,
	error: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SM_FETCH_CONTENT: {
		return {
			...state,
			loadingSMContent: true,
		};
	}
	case SM_SET_PAGINATED_CONTENT: {
		const twitter = union(state.twitter, action.content.filter(c => c.source.name === 'Twitter'));
		return {
			...state,
			twitter: [...twitter],
			loadingSMContent: false,
		};
	}
	case SM_SET_PAGINATED_CONTENT_HAS_MORE: {
		return {
			...state,
			hasMore: action.hasMore,
		};
	}
	case SM_LOADING_CONTENT: {
		return {
			...state,
			loadingSMContent: action.loadingSMContent,
		};
	}
	case SM_SET_NEXT_PAGINATION_PAGE: {
		return {
			...state,
			nextPage: action.nextPage,
		};
	}
	case SM_ERROR: {
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