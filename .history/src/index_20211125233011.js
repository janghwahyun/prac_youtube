import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Youtube from './service/youtube';

const youtube = new Youtube('AIzaSyDcZ95PjpOXl2sifl-Zd_am8vLtdl7Mh8E');
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
