import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux'; //pai de todos que será responsável por guardar o Store do State gigante

import './index.css';
import App from './App';


ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);