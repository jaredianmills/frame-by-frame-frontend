import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import Root from './components/Root'
import { ActionCableProvider } from 'react-actioncable-provider';

require('dotenv').config()


ReactDOM.render(
  <ActionCableProvider url={process.env.REACT_APP_API_WS_ROOT}>
    <Root store={store} />
  </ActionCableProvider>,
  document.getElementById('root'));
registerServiceWorker();
