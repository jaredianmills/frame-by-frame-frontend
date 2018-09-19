import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import Root from './components/Root'

require('dotenv').config()


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
