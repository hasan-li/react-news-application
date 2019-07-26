import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router } from "react-router-dom";

import reducers from './reducers';
import App from './App';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
	userState: undefined,
	categoryState: undefined,
	generalState: undefined,
	articlesState: undefined,
};

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
	window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
const enhancer = process.env.REACT_APP_ENVIRONMENT === 'development' ? composeEnhancers(applyMiddleware(sagaMiddleware, logger)) : applyMiddleware(sagaMiddleware);

const store = createStore(
	reducers,
	defaultState,
	enhancer,
);

sagaMiddleware.run(rootSaga);

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
