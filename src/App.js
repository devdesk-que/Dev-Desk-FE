import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import UserInformation from './components/UserInformation'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/userinformation' component={UserInformation} />
        <Route path='/adduser' component={AddUser} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
