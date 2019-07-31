import {
  LOADING,
  LOGIN_SUCCESS,
  GET_SUCCESS,
  ERROR,
  NEW_USER_SUCCESS,
  NEW_USER_ERROR,
  GET_TICKETS_ALL,
  GET_USERS_SUCCESS,
  GET_SINGLE_USER,
  SUBMIT_TICKET
} from '../actions';

const initialState = {
  tickets: [],
  user: null,
  error: null,
  loading: false,
  isAuth: false,
  isNew: false
};

export default function devDeskReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
        isNew: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: actions.payload,
        error: null,
        isAuth: true,
        isNew: false
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: actions.payload,
        isNew: false
      };
    case NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isNew: true,
        error: null
      };
    case NEW_USER_ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: actions.payload,
        isNew: false
      };
    case GET_TICKETS_ALL:
      return {
        ...state,
        loading: false,
        error: null,
        tickets: actions.payload,
        isAuth: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: actions.payload,
        isAuth: true
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        loading: false,
        error: null,
        id: actions.payload,
        isAuth: true
      };
    case SUBMIT_TICKET:
      return {
        ...state,
        loading: false,
        isAuth: true
      };
    default:
      return state;
  }
}
