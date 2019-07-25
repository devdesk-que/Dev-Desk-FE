import axios from 'axios';
import useAuth from '../../components/authentication/useAuth';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ERROR = 'ERROR';

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOADING });

  axios
    .post('https://devdesk-backend.herokuapp.com/api/auth/login')
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ERROR, payload: err.response.data });
    });
};
