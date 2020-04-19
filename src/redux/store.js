import { createStore, applyMiddleware } from 'redux'; //middleware pegar acao antes de ir pro root reducer
import logger from 'redux-logger'; //para debuggar

import rootReducer from './root-reducer';
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));  //criando o mega Store com todos os states

export default store;