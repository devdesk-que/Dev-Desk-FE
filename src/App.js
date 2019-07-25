import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
