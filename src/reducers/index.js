import { combineReducers } from 'redux';

import { REDUCER_KEY as AUTH_REDUCER_KEY } from '../constants/user';
import { REDUCER_KEY as CATEGORIES_REDUCER_KEY } from '../constants/categories';
import { REDUCER_KEY as APP_REDUCER_KEY } from '../constants/app';

import userReducer from './user';
import categoriesReducer from './categories';
import generalReducer from './app';
import articlesReducer from './news';

const reducers = combineReducers({
	[AUTH_REDUCER_KEY]: userReducer,
	[CATEGORIES_REDUCER_KEY]: categoriesReducer,
	[APP_REDUCER_KEY]: generalReducer,
	articlesState: articlesReducer,
});

export default reducers;