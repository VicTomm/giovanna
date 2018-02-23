import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetProjects} from './actions/actions';
import {login, logout} from './actions/auth';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import LazyLoad from 'react-lazy-load';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();
const jsx = (
  <LazyLoad once>
  <Provider store={store}>
    <AppRouter/>
  </Provider>
  </LazyLoad>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase
  .auth()
  .onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(login(user.uid));
      store
        .dispatch(startSetProjects())
        .then(() => {
          renderApp();
          if (history.location.pathname === '/login') {
            history.push('/projects');
          }
        });
    } else {
      store.dispatch(logout());
      store
        .dispatch(startSetProjects())
        .then(() => {
          renderApp();
          if (history.location.pathname === '/projects') {
            history.push('/');
          }
        });
    }
  });