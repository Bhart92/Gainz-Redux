import { SAVE_TEMP_WORKOUTS, SAVE_WORKOUTS, RESET_TEMP_WORKOUTS } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';



export const saveTempWorkouts = (workouts) => dispatch => {
    dispatch({
        type: SAVE_TEMP_WORKOUTS,
        payload: workouts
    })
};
//Save WorkoutList
export const saveWorkouts = ( workouts ) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ workouts });

    try {
      const res = await axios.post('api/workouts', body, config);
      console.log('fired')

      dispatch({
        type: SAVE_WORKOUTS,
        payload: res.data
      });
      dispatch(setAlert('Workouts Saved', 'success'))
    } catch (err) {
      const errors = err.response.data.errors;
        console.log(err)
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  
  }

export const resetWorkouts = (workouts) => dispatch => {
    dispatch({
        type: RESET_TEMP_WORKOUTS
    })
};
