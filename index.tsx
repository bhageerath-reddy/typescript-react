import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRouter } from './router';

ReactDOM.render(<AppRouter />, document.getElementById('root'));


serviceWorker.unregister();