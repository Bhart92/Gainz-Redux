import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import workouts from './workouts';




export default combineReducers({
    alert,
    auth,
    workouts
});