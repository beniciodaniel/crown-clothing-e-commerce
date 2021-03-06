import { createStore, applyMiddleware } from 'redux'; //middleware pegar acao antes de ir pro root reducer
import logger from 'redux-logger'; //para debuggar
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));  //criando o mega Store com todos os states

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export {store, persistor};