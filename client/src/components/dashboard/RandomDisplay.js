import React, { useEffect } from 'react';
import SaveButton from '../layout/SaveButton';
import uuid from 'uuid';
import { connect } from 'react-redux';
import {saveWorkouts, resetWorkouts} from '../../actions/workouts';

const RandomDisplay = ({ workouts: {tempWorkouts}, saveWorkouts, resetWorkouts }) => {
    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        const generatedWorkouts = document.getElementsByClassName('random-workout--item');
        const workoutsArray = Array.from(generatedWorkouts)
        let delay = -.1;
        workoutsArray.forEach((item) => {
            delay += .05;
            item.classList.toggle('active')
            item.style.transitionDelay = `${delay}s`;
        });
	});
    const workoutArr = Object.values(tempWorkouts);

    const res = {};
    let array = [];

    const handleSubmit = (array) => {
        array.forEach(obj => {
            res[obj.name] = obj.name;
            res[obj.url] = obj.url;
        })
        saveWorkouts(array)
    };

    const resetForm = () => {
        resetWorkouts();
     };

    return(
	    <div className='random-workout--container'>
            <div className='random-workout--inner-container'>
            {workoutArr.length === 0 && <p className='random-workout__placeholder'>Generate some workouts to get started.</p>}
            {
                workoutArr.map((workout, index) => {
                    return (
                        <div className='random-workout--item' 
                             onClick={() => {
                                array.push(workout);
                            }} key={uuid()}>
                            <p><img src={workout.icon} alt={workout.value}/> {workout.name}</p>
                            <SaveButton />
                        </div>
                    )
                })
            }
            </div>
            <div className='button--container'>
                    <button className=' button button__save' onClick={e => handleSubmit(array) } disabled={!Object.keys(tempWorkouts).length > 0} >Save Workouts</button>
                <button className='button button__reset' onClick={resetForm} disabled={!Object.keys(tempWorkouts).length > 0}>Reset</button>
            </div>
	    </div>
    )
};

const mapStateToProps = state => ({
    workouts: state.workouts
});

export default connect(mapStateToProps, {saveWorkouts, resetWorkouts})(RandomDisplay);