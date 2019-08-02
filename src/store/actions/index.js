import axios from 'axios';
import useAuth from '../../components/authentication/useAuth';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ERROR = 'ERROR';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_ERROR = 'NEW_USER_ERROR';
export const GET_TICKETS_ALL = 'GET_TICKETS_ALL';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_SINGLE_USER = 'GET_SINGLE_USER';
export const SUBMIT_TICKET = 'SUBMIT_TICKET';
export const GET_SINGLE_TICKET = 'GET_SINGLE_TICKET';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_TICKET = 'DELETE_TICKET';

export const login = credentials => async dispatch => {
  dispatch({ type: LOADING });

  return axios
    .post('https://devdesk-backend.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.data.message });
    });
};

export const getTickets = () => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .get('https://devdesk-backend.herokuapp.com/api/tickets/')
    .then(res => {
      dispatch({ type: GET_TICKETS_ALL, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.data });
    });
};

export const createUser = newUserPacket => async dispatch => {
  dispatch({ type: LOADING });

  axios
    .post(
      'https://devdesk-backend.herokuapp.com/api/auth/register',
      newUserPacket
    )
    .then(res => {
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: NEW_USER_ERROR, payload: err.response.message });
    });
};

export const getAllUsers = () => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .get('https://devdesk-backend.herokuapp.com/api/users')
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR });
    });
};

export const getSingleUser = id => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .get(`https://devdesk-backend.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR });
    });
};

export const getSingleTicket = id => dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .get(`https://devdesk-backend.herokuapp.com/api/tickets/${id}`)
    .then(res => {
      dispatch({ type: GET_SINGLE_TICKET, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR });
    });
};

export const submitTicket = newTicketPacket => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .post('https://devdesk-backend.herokuapp.com/api/tickets/', newTicketPacket)
    .then(res => {
      dispatch({ type: SUBMIT_TICKET });
    })
    .then(() => getTickets()(dispatch))
    .catch(err => {
      dispatch({ type: NEW_USER_ERROR, payload: err.response.message });
    });
};

export const editTicket = editedTicketPacket => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .put(
      'https://devdesk-backend.herokuapp.com//api/tickets/:id',
      editedTicketPacket
    )
    .then(res => {
      dispatch({ type: SUBMIT_TICKET, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.message });
    });
};

export const editUser = userPacket => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .put('https://devdesk-backend.herokuapp.com/api/users/:id', userPacket)
    .then(res => {
      dispatch({ type: EDIT_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.message });
    });
};

export const deleteUser = id => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .delete('https://devdesk-backend.herokuapp.com/api/users/:id', id)
    .then(res => {
      dispatch({ type: DELETE_USER });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.message });
    });
};

export const deleteTicket = id => async dispatch => {
  dispatch({ type: LOADING });

  useAuth()
    .delete('https://devdesk-backend.herokuapp.com/api/tickets/:id', id)
    .then(res => {
      dispatch({ type: DELETE_TICKET });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.message });
    });
};
