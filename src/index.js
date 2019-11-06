import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configure';
import * as serviceWorker from './serviceWorker';
import {AppRouter} from './router.js';

const reanderApp = () => (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(reanderApp(), document.getElementById('root'));

serviceWorker.unregister();