import { LOADING, LOGIN_SUCCESS, GET_SUCCESS, ERROR } from '../actions';

const initialState = {
  ticket: {},
  loading: false,
  error: null,
  isAuth: false
};

export default function devDeskReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false
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
        isAuth: true
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        error: actions.payload
      };
    default:
      return state;
  }
}
