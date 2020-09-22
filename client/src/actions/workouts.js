import axios from 'axios';
import { SAVE_TEMP_WORKOUTS, SAVE_WORKOUTS, RESET_TEMP_WORKOUTS, CLEAR_SAVED_WORKOUT_LIST } from './types';
import { setAlert } from './alert';
import { loadUser } from './auth';

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
      dispatch({
        type: SAVE_WORKOUTS,
        payload: res.data
      });
      dispatch(loadUser());
      dispatch(setAlert('Workouts Saved', 'success'))
    } catch (err) {
      const errors = err.response.data.errors;
        console.log(err)
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  
  }

//Clear Saved WorkoutList
export const clearSavedWorkouts = () => async (dispatch) => {

  try {
    const res = await axios.put('api/workouts');
    dispatch({
      type: CLEAR_SAVED_WORKOUT_LIST
    });
    dispatch(loadUser());
    dispatch(setAlert('Workouts Cleared', 'success'))
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

//remove any duplicate objects in an array based off of the second parameter passed in
export const getUnique = (arr, comparison) => {

  // store the comparison  values in array
  const unique =  arr.map(e => e[comparison])

  // store the indexes of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i)

  // eliminate the false indexes & return unique objects
  .filter((e) => arr[e]).map(e => arr[e]);

return unique;
}
