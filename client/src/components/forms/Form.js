import React, { useContext, useState} from 'react';
import PropTypes from 'prop-types';
import WorkoutContext from '../../context/workoutContext';
import workoutReducer from '../../reducers/workoutReducer';
import { connect } from 'react-redux';
import {saveTempWorkouts, resetWorkouts} from '../../actions/workouts';

  const Form = ({saveTempWorkouts, resetWorkouts, workouts, workouts: {tempWorkouts}}) => {
    const worksoutContext = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'chest'
    });
    const inputValue = (e) => {
        resetWorkouts();
         const value = e.target.value; 
         setState(() => ({
             value
         }))
     };
    const onSubmit = (e) => {
        e.preventDefault();
        const workoutArray = workoutReducer(state, worksoutContext);
        saveTempWorkouts(workoutArray)
     };
     return (
        <div className='generate--form-container'>
            <h1>Generate workouts</h1>
            <form className='generate--form' onSubmit={onSubmit}>              
                <select className='generate--form-select' value={state.value} onChange={inputValue}>
                    <option value='chest'>Chest</option>
                    <option value='back'>Back</option>
                    <option value='shoulders'>Shoulder</option>
                    <option value='biceps'>Biceps</option>
                    <option value='triceps'>Triceps</option>
                    <option value='forearms'>Forearms</option>
                    <option value='legs'>Legs</option>
                    <option value='abs'>Abs</option>
                    <option value='cardio'>Cardio</option>
                    <option value='kettlebells'>Kettlebells</option>
                </select>
                <button className='button button__generate' type='submit' disabled={Object.keys(tempWorkouts).length > 0}>Generate Workouts</button>
            </form>
        </div>
    );
};
Form.propTypes = {
    workouts: PropTypes.array.isRequired

};
const mapStateToProps = state => ({
    workouts: state.workouts
  });

export default connect(mapStateToProps, { resetWorkouts, saveTempWorkouts })(Form);
    
