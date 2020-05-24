import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux'; //pai de todos que será responsável por guardar o Store do State gigante
// import store from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);