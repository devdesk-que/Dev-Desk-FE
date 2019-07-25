import { LOADING, LOGIN_SUCCESS, GET_SUCCESS, ERROR, NEW_USER_SUCCESS } from '../actions';

const initialState = {
  ticket: {},
  loading: false,
  error: null,
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
    case GET_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuth: true,
        isNew: false,
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
    default:
      return state;
  }
}
