import React, {useContext, useEffect, Fragment} from 'react';
// import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import uuid from 'uuid';

const SavedWorkouts = ({savedWorkoutList}) => {
	return(
		<div className='saved--workout-wrapper'>
            {savedWorkoutList.length === 0 && <p>Save some workouts to get started</p>}
            {savedWorkoutList === undefined ? '' : (
                savedWorkoutList.map((workout, i) => {
                    return (
                        <Fragment>
                            <p key={uuid()} className='saved--workout-details'> {workout.name}</p>
                            <a href={workout.url}key={uuid()} className='saved--workout-details'>Tutorial</a>
                        </Fragment>
                    );
                })
            )}
            {}	
		</div>
	);
};

export default SavedWorkouts;