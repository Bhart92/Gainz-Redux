import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Redirect } from 'react-router-dom';
import SavedWorkouts from './SavedWorkouts';
import { clearSavedWorkouts } from '../../actions/workouts';
import { loadUser } from '../../actions/auth';


const SavedWorkoutDisplay = ({user, savedWorkouts, isAuthenticated, clearSavedWorkouts, loadUser}) => {
	useEffect(() => {
		loadUser();
	}, [loadUser])
const [workoutState, setWorkoutState] = useState(false);

	const handleReset = async () => {
		 setWorkoutState(!workoutState);
		 clearSavedWorkouts();
	}

	return user === null ? <Spinner /> :
		<div className='container'>
			<h1 className='saved--title'>Saved Workouts</h1>
				<div className='saved--container'>
				<div className='saved--title-container'>
					<div className='saved--title'><h2>Workouts</h2></div>
					<div className='saved--title'><h2>How do I do this?<i class="fab fa-youtube"></i></h2></div>
					<hr/>
				</div>
				<SavedWorkouts savedWorkoutList={user.savedWorkoutList}/>
				<div className='button--container'>
					<button className='button button__reset' onClick={handleReset} disabled={user.savedWorkoutList.length === 0}>Reset</button>
				</div>
				</div>

		</div>;
};
const mapStateToProp = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user,
	savedWorkouts: state.workouts.savedWorkouts
});
export default connect(mapStateToProp, {loadUser, clearSavedWorkouts})(SavedWorkoutDisplay);