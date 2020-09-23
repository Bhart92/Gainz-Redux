import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_PROFILE,
    ACCOUNT_DELETED
} from '../actions/types';


//Load User
export const loadUser = () => async (dispatch) => {

  try {
    setAuthToken(localStorage.token);

    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('/api/auth', body, config);
      await dispatch({type: CLEAR_PROFILE});
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.map(error => dispatch(setAlert(error.msg, 'success')));

      }
console.log('failed')
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
// Redirect User
export const redirect = redirectUrl => {
    window.location = redirectUrl;
  };


//Register User
export const register = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });


    // dispatch(loadUser());

    

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//lOGOUT / CLEAR PROFILE
export const logout = () => dispatch => {
  dispatch({type: CLEAR_PROFILE});
  dispatch({type: LOGOUT});
}

// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/auth');

      dispatch({ type: AUTH_ERROR });
      dispatch({ type: ACCOUNT_DELETED });

    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};


