import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import CurrentUser from './conponents/current_user';
// import Post from './conponents/post';
import App from './conponents/App';
import * as serviceWorker from './serviceWorker';


// 参考
// https://webkikaku.co.jp/homepage/blog/hpseisaku/javascript/react-start/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
