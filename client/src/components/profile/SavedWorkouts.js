import React, {useContext, useEffect, Fragment} from 'react';
// import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import uuid from 'uuid';

const SavedWorkouts = ({savedWorkoutList}) => {

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
	return(
		<div className='saved--workout-wrapper'>
            {savedWorkoutList.length === 0 && <p>Save some workouts to get started</p>}
            {savedWorkoutList === undefined ? '' : (
                sortedWorkouts.map((workout, i) => {
                    return (
                        <div className='saved--workout--wrapper-box'>
                            <p key={uuid()} className='saved--workout-details'><img src={workout.icon} alt={workout.value}/>{workout.name}</p>
                            <a href={workout.url}key={uuid()} >Tutorial</a>
                        </div>
                    );
                })
            )}
		</div>
	);
};

export default SavedWorkouts;


