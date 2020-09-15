import { SAVE_TEMP_WORKOUTS, SAVE_WORKOUTS, CLEAR_WORKOUTS } from './types';
import { setAlert } from './alert';



export const saveTempWorkouts = (workouts) => dispatch => {
    dispatch({
        type: SAVE_TEMP_WORKOUTS,
        payload: workouts
    })
};
export const saveWorkouts = (workouts) => dispatch => {
    dispatch({
        type: SAVE_WORKOUTS,
        payload: workouts
    })
    dispatch(setAlert('Workouts Saved', 'success'))};

export const ClearWorkouts = (workouts) => dispatch => {
    dispatch({
        type: CLEAR_WORKOUTS,
        payload: []
    })
};
