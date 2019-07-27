import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute(props) {
  const { component: Component, isAuth, ...rest } = props;
  const token = localStorage.getItem('token');

  console.log(isAuth);
  console.log(token);
  const isAuth2 = true;
  if (isAuth2) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/login' />;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
