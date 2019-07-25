import { LOADING, LOGIN_SUCCESS, GET_SUCCESS, ERROR } from '../actions';

const initialState = {
  ticket: {},
  loading: false,
  error: null
};

export default function devDeskReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
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
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: actions.payload
      };
    default:
      return state;
  }
}
