import React, { Fragment, useEffect } from 'react';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import store from './store';
import setAuthToken from './utils/setAuthToken';
import './styles/styles.scss';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </HashRouter>
    </Provider>
  );
};

export default App;