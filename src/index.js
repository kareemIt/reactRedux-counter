import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducer from './reducer/counter';

import App from './App';
const store = createStore(counterReducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
