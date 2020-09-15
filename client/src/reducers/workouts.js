import { SAVE_TEMP_WORKOUTS, SAVE_WORKOUTS, RESET_TEMP_WORKOUTS } from '../actions/types';


const initialState = {
    tempWorkouts: [],
    savedWorkouts: []
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
                tempWorkouts: [],
            };       
            default:
                return state;
            }
        }