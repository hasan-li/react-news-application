import { combineReducers } from 'redux';

import userReducer from './user';
import categoriesReducer from './categories';
import generalReducer from './general';
import articlesReducer from './news';
import socialMediaContentReducer from './social-media';

const reducers = combineReducers({
	userState: userReducer,
	categoryState: categoriesReducer,
	generalState: generalReducer,
	articlesState: articlesReducer,
	socialMediaContentState: socialMediaContentReducer,
});

export default reducers;