import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute(props) {
  const { component: Component, isAuth, ...rest } = props;
  if (isAuth) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/login' />;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.devDeskReducer.isAuth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
