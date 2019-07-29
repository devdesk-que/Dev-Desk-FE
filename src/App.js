// React Components
import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

// Components
import Login from './components/authentication/Login';
import Dashboard from './components/dashboard/Dashboard';
import AddUser from './components/authentication/AddUser';
import UserInformation from './components/dashboard/Users/UserInformation'

function App() {
  return (
    <div className='App'>
      {/* Using Switch from React-Router-Dom, pathed out root, adduser, and dashboard */}
      <Switch>
        <Route path='/userinformation/:id' component={UserInformation} />
        <Route path='/adduser' component={AddUser} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
