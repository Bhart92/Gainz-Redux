import React, {useContext, useEffect, Fragment} from 'react';
// import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import uuid from 'uuid';

const SavedWorkouts = ({savedWorkouts}) => {
	useEffect(() => {
  const generatedWorkouts = document.getElementsByClassName('saved--workout-details');
        const workoutsArray = Array.from(generatedWorkouts)
        let delay = -.1;
        workoutsArray.forEach((item) => {
            delay += .05;
            item.classList.add('active')
            item.style.transitionDelay = `${delay}s`;

        })
	})

	return(
		<div className='saved--workout-wrapper'>
            {savedWorkouts.map((workout, i) => {
										return (
                                            <Fragment>
                                                <p key={uuid()} className='saved--workout-details'> {workout.name}</p>
                                                <a href={workout.url}key={uuid()} className='saved--workout-details'>Tutorial</a>
                                            </Fragment>
                                        );
										
			})}	
		</div>
	);
};

export default SavedWorkouts;