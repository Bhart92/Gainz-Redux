import React, {Fragment} from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Header from '../layout/Header';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';
import HelpPage from '../layout/HelpPage';
import Settings from '../auth/Settings';




import PrivateRoute from '../routing/PrivateRoute';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const Routes = ({isAuthenticated}) => {
  return (
    <Fragment>
      {isAuthenticated ? <Header /> : ''}
      {isAuthenticated ? <Settings /> : ''}
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/help' component={HelpPage} />
          <Route component={NotFound} />
        </Switch>
    </Fragment>

  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Routes);