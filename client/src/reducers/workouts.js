import { SAVE_WORKOUTS, CLEAR_WORKOUTS } from '../actions/types';


const initialState = [];


export default function(state = initialState, action) {
    const { type, payload } = action;

    
    switch(type){
        case SAVE_WORKOUTS:
                return {
                    ...state,
                    ...payload
                };  
        case CLEAR_WORKOUTS:
            return {
                ...state,
                };       
            default:
                return state;
            }
        }