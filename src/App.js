import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser'
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/adduser' component={AddUser} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
