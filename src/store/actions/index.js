import axios from 'axios';
// import useAuth from '../../components/authentication/useAuth';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ERROR = 'ERROR';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS'
export const NEW_USER_ERROR = 'NEW_USER_ERROR'

export const login = credentials => async dispatch => {
  dispatch({ type: LOADING });

  axios
    .post('https://devdesk-backend.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      console.log('RES:', res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('ERR:', err.response);
      dispatch({ type: ERROR, payload: err.response.data });
    });
};

// export function login(username, password) {
//   return dispatch => {
//     dispatch({ type: LOADING });

//     return useAuth()
//       .post('https://devdesk-backend.herokuapp.com/api/auth/login', {username, password })
//       .then(res => {
//         localStorage.setItem('token', res.data.payload)
//         dispatch({ type: LOGIN_SUCCESS })
//       })
//       .catch(err => {
//         const payload = err.response ? err.response.data : err;
//         dispatch({ type: ERROR, payload})
//       })
//   }
// }

export const createUser = newUserPacket => async dispatch => {
  dispatch({ type: LOADING })

  axios
    .post('https://devdesk-backend.herokuapp.com/api/auth/register', newUserPacket)
    .then(res => {
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log('Err:', err.response)
      dispatch({ type: NEW_USER_ERROR, payload: err.response.message})
    })
}
