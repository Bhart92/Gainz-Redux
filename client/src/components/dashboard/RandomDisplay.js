import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {saveWorkouts, resetWorkouts} from '../../actions/workouts';
import SaveButton from '../layout/SaveButton';
import uuid from 'uuid';


const RandomDisplay = ({ workouts: {tempWorkouts}, saveWorkouts, resetWorkouts }) => {
    console.log(Object.keys(tempWorkouts).length>0)
    const workoutArr = Object.values(tempWorkouts);
    // eslint-disable-next-line no-use-before-define
    useEffect(() => {
        const generatedWorkouts = document.getElementsByClassName('random-workout--item');
        const workoutsArray = Array.from(generatedWorkouts)
        let delay = -.1;
        workoutsArray.forEach((item) => {
            delay += .05;
            item.classList.toggle('active')
            item.style.transitionDelay = `${delay}s`;

        })
	})
    const res = {};
    let array = [];
    const handleSubmit = (array) => {
        array.forEach(obj => {
            res[obj.name] = obj.name;
            res[obj.url] = obj.url;
        })
        saveWorkouts(array)
    }
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
                <p >{workout.name}</p>
                <SaveButton />
                </div>)
        })
		}
        </div>
    <div className='button--container'>
        {/* <span>{submit.status}</span> */}

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