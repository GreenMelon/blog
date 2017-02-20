/** @jsx Inferno */
/* eslint-disable react/no-deprecated, react/jsx-filename-extension, no-underscore-dangle */
import 'normalize.css';
import 'prismjs/themes/prism-okaidia.css';
import Inferno from 'inferno';
import { Router } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createRoutes from './createRoutes';
import './styles/style.css';

const browserHistory = createBrowserHistory();

if (/\/blog\/.+/.test(location.pathname)) {
  window.__INITIAL_STATE__.post.content = document.getElementById('article-content').innerHTML;
}

Inferno.render((
  <Router history={browserHistory}>
    {createRoutes(window.__INITIAL_STATE__)}
  </Router>
), document.getElementById('root'));

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .catch(error => console.log(error));
//   });
// }