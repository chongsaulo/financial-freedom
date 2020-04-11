import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import MaterialProvider from './components/Material/MaterialProvider';

ReactDOM.render(
  <React.StrictMode>
    <MaterialProvider>
      <App />
    </MaterialProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
