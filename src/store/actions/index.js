import axios from 'axios';
import useAuth from '../../components/authentication/useAuth';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ERROR = 'ERROR';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_ERROR = 'NEW_USER_ERROR';
export const GET_TICKETS_ALL = 'GET_TICKETS_ALL';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_SINGLE_USER = 'GET_SINGLE_USER'

export const login = credentials => dispatch => {
  dispatch({ type: LOADING });

  return axios
    .post('https://devdesk-backend.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('ERR:', err.response);
      dispatch({ type: ERROR, payload: err.response.data.message });
    });
};

export const getTickets = () => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .get('https://devdesk-backend.herokuapp.com/api/tickets/')
    .then(res => {
      console.log('GET RES:', res);
      dispatch({ type: GET_TICKETS_ALL, payload: res.data });
    })
    .catch(err => {
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
  dispatch({ type: LOADING });

  axios
    .post(
      'https://devdesk-backend.herokuapp.com/api/auth/register',
      newUserPacket
    )
    // console.log(newUserPacket)
    .then(res => {
      console.log('!!!!!!:', newUserPacket)
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Err:', err.response);
      dispatch({ type: NEW_USER_ERROR, payload: err.response.message });
    });
};

export const getAllUsers = () => async dispatch => {
  dispatch({ type: LOADING })

  useAuth()
    .get('https://devdesk-backend.herokuapp.com/api/users')
    .then(res => {
      console.log(res)
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR })
      console.log('Get User Err:', err)
    })
}

export const getSingleUser = (id) => dispatch => {
  dispatch({ type: LOADING})

  axios
    .get('https://devdesk-backend.herokuapp.com/api/users/:id', id)
    .then(res => {
      dispatch({ type: GET_SINGLE_USER, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR })
      console.log('Get User Error:', err)
    })
}