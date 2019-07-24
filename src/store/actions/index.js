import axios from 'axios';
import useAuth from '../../components/authentication/useAuth';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ERRORS = 'ERRORS';

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOADING });

  return useAuth()
    .post('https://devdesk-backend.herokuapp.com/api/auth/login')
    .then(res => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERRORS, payload: err.response.data });
    });
};
