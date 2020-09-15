import React, { useContext, useEffect} from 'react';

import SaveButton from '../layout/SaveButton';
import uuid from 'uuid';


const RandomDisplay = (props) => {
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
    // const {setSavedWorkouts} = useContext(SavedWorkoutsContext);
    // const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    // const {submit, setSubmit} = useContext(SavedStatusContext);
    // let currentworkout = Object.values(currentWorkouts); 
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
            {/* {currentworkout.length === 0 && <p className='random-workout__placeholder'>Generate some workouts to get started.</p>} */}
		{/* {
			currentworkout.map((workout, index) => {
                return (
                    <div className='random-workout--item' 
                            onClick={() => {
                    return array.push(workout);
                }} key={uuid()}>
                <p >{workout.name}</p>
                <SaveButton />
                </div>)
        })
		} */}
        </div>
    <div className='button--container'>
        {/* <span>{submit.status}</span> */}
            <button className=' button button__save' onClick={handleSubmit} >Add To Workout List</button>
        <button className='button button__reset' onClick={resetForm}>Reset</button>
    </div>

	</div>
    )
};


export default RandomDisplay;