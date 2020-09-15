import React, { useContext, useState} from 'react';
import { connect } from 'react-redux';
import WorkoutContext from '../../context/workoutContext';
import workoutReducer from '../../reducers/workoutReducer';
import {saveWorkouts} from '../../actions/workouts';

//added
  const Form = ({saveWorkouts}) => {
    const workouts = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'chest'
    });
    const inputValue = (e) => {
         const value = e.target.value; 
         setState(() => ({
             value
         }))
     };
     const onSubmit = (e) => {
        e.preventDefault();
        const workoutArray = workoutReducer(state, workouts);
        saveWorkouts(workoutArray)
     };
                return (
                    // < WorkoutContext.Provider>
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
                            <button className='button button__generate' type='submit' >Generate Workouts</button>
                            
                        </form>
                </div>
                    // </WorkoutContext.Provider>
        );
};
const mapStateToProps = state => ({
    workouts: state.workouts
  });
        export default connect(mapStateToProps, { saveWorkouts })(Form);
    
