import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import Counter from './Count';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
