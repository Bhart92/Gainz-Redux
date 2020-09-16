import React, {useContext, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SavedWorkouts from './SavedWorkouts';
import { clearSavedWorkouts } from '../../actions/workouts';

// import SavedWorkoutsContext from '../context/savedWorkoutsContext';
// import SavedStatusContext from '../context/savedStatusContext';
// import SavedWorkout from './SavedWorkout';


const SavedWorkoutDisplay = ({savedWorkouts, isAuthenticated, clearSavedWorkouts}) => {
	if(!isAuthenticated){
		return <Redirect to='/' />;
	}

	const handleReset = () => {
		clearSavedWorkouts();
	}

	return(
		<div className='container'>
			<h1 className='saved--title'>Saved Workouts</h1>
				<div className='saved--container'>
				<div className='saved--title-container'>
					<div className='saved--title'><h2>Workouts</h2></div>
					<div className='saved--title'><h2>How do I do this?<i class="fab fa-youtube"></i></h2></div>
					<hr/>
				</div>
				<SavedWorkouts savedWorkouts={savedWorkouts}/>
				<div className='button--container'>
					<button className='button button__reset' onClick={handleReset}>Reset</button>
				</div>
				</div>

		</div>
	);
};
const mapStateToProp = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
	savedWorkouts: state.workouts.savedWorkouts
});
export default connect(mapStateToProp, {clearSavedWorkouts})(SavedWorkoutDisplay);