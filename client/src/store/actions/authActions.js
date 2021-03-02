import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, SET_LOAD_FOR_EDIT } from './types';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const setErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err.response.data,
  };
};
export const setUrl = (url) => {
  return {
    type: SET_LOAD_FOR_EDIT,
    payload: url,
  };
};

export const registerUser = (userData, history) => dispatch => {
  dispatch(setErrors({ response: { data: {} } }));
  axios.post('/api/auth/register', userData).then(res => history.push('/login')).catch(err => dispatch(setErrors(err)));
};

export const loginUser = (userData, history) => dispatch => {
  dispatch(setErrors({ response: { data: {} } }));

  axios.post('/api/auth/login', userData).then(res => {
    const { token } = res.data;

    localStorage.setItem('jwtToken', token);
    setAuthToken(token);

    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    history.push('/');
  }).catch(err => dispatch(setErrors(err)));
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem('jwtToken');

  setAuthToken(false);

  dispatch(setCurrentUser({}));

  history.push('/login');
};
