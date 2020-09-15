import React, {Fragment} from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Header from '../layout/Header';
import Dashboard from '../dashboard/Dashboard';


import PrivateRoute from '../routing/PrivateRoute';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const Routes = ({isAuthenticated}) => {
  return (
    <Fragment>
      {isAuthenticated ? <Header /> : ''}
      <section className='container register'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </Fragment>

  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Routes);