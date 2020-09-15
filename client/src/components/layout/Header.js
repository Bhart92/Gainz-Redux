import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
// import SavedWorkoutsContext from '../context/savedWorkoutsContext';


const Header = ({ isAuthenticated, logout }) => {
    // const {savedWorkouts} = useContext(SavedWorkoutsContext);
    const headerItems = localStorage.getItem('workouts');
    let headerArray;
    // if(headerItems != null){
    //     headerArray = Object.entries(headerItems)
    // } else{
    //     headerArray = Object.entries(headerItems)
    // }

    return(
    <header className='header'>
        <div><h1 className='header--h1'><Link to='dashboard'><i class="fas fa-dumbbell"></i><i class="fas fa-dumbbell"></i>Gainz</Link></h1></div>
        <div>
            <ul>
                <li onClick={e => logout()}>
                    Logout
                </li>
                <li>
                    <Link to='/'>My Workouts</Link>
                </li>
                </ul>
          </div>
    </header>
    );
};

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(Header);
