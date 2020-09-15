import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SaveButton from '../layout/SaveButton';
import uuid from 'uuid';


const RandomDisplay = ({ workouts }) => {
    const workoutArr = Object.values(workouts);
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
    const handleSubmit = () => {
        // array.forEach(obj => {
        //     res[obj.name] = obj.name;
        //     res[obj.url] = obj.url;
        // })
        // setSavedWorkouts(prevState => ({
        //     ...prevState,
        //     ...res
        // }))
        // setCurrentWorkouts({});
        // setSubmit({status: 'Goto saved workouts to view & save list'});
    }
    const resetForm = () => {
        // setSavedWorkouts({});
        // setCurrentWorkouts({});
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
            <button className=' button button__save' onClick={handleSubmit} >Add To Workout List</button>
        <button className='button button__reset' onClick={resetForm}>Reset</button>
    </div>
    <NavLink exact={true} to='help'>Help</NavLink>

	</div>
    )
};

const mapStateToProps = state => ({
    workouts: state.workouts
});

export default connect(mapStateToProps)(RandomDisplay);