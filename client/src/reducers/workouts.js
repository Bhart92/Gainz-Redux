import { SAVE_TEMP_WORKOUTS, SAVE_WORKOUTS, RESET_TEMP_WORKOUTS, CLEAR_SAVED_WORKOUT_LIST } from '../actions/types';

const initialState = {
    tempWorkouts: [],
    savedWorkouts: [],
    user: null
};

export default function(state = initialState, action, previousState) {
    const { type, payload } = action;
    switch(type){
        case SAVE_TEMP_WORKOUTS:
            return {
                ...state,
                tempWorkouts: {...payload}
            }; 
        case SAVE_WORKOUTS:
            return {
                ...state,
                tempWorkouts: [],
                savedWorkouts: [...state.savedWorkouts, ...payload]
            };  
        case RESET_TEMP_WORKOUTS:
            return {
                ...state,
                tempWorkouts: []
            };
        case CLEAR_SAVED_WORKOUT_LIST:
            return {
                ...state,
                savedWorkouts: new Array()
                };           
            default:
                return state;
    };
}