import React from 'react';
import uuid from 'uuid';
import { getUnique } from '../../actions/workouts';

const SavedWorkouts = ({savedWorkoutList}) => {

  const handleClick = (workout, i) => {
      const workoutList = document.querySelectorAll('.saved--workout--wrapper-box')
      const arr = Array.from(workoutList);
      const element = arr[i]
      element.classList.toggle('strikeout');
    };

  const sortedWorkouts = savedWorkoutList.sort(function(a, b) {
      var nameA = a.value.toUpperCase(); // ignore upper and lowercase
      var nameB = b.value.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  
  const newWorkouts = getUnique(sortedWorkouts, 'name');
  
  return(
		<div className='saved--workout-wrapper'>
      {savedWorkoutList.length === 0 && <p>Save some workouts to get started</p>}
      {savedWorkoutList === undefined ? '' : (
        newWorkouts.map((workout, i) => {
          return (
            <div onClick={() => handleClick(workout, i)} className='saved--workout--wrapper-box'>
              <span key={uuid()} className='saved--workout-details'><img src={workout.icon} alt={workout.value}/>{workout.name}</span>
              <a href={workout.url}key={uuid()} ><i class="fab fa-youtube"></i></a>
            </div>
          );
        })
      )}
		</div>
	);
};

export default SavedWorkouts;


