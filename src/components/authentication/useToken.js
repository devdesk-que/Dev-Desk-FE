import { LOGIN_SUCCESS } from '../../store/actions/';

const useToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    console.log('Middleware Called', action.payload.token);
    localStorage.setItem('token', action.payload.token);
  }
  next(action);
};

export default useToken;
