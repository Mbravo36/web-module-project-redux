import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import reducer from './reducers';
const store = createStore(
  reducer,
)

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
