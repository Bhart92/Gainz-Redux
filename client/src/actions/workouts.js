import { SAVE_WORKOUTS, CLEAR_WORKOUTS } from './types';


export const saveWorkouts = (workouts) => dispatch => {
    dispatch({
        type: SAVE_WORKOUTS,
        payload: workouts
    })
};

export const ClearWorkouts = (workouts) => dispatch => {
    dispatch({
        type: CLEAR_WORKOUTS,
        payload: []
    })
};
