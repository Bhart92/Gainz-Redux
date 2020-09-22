import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ isAuthenticated, logout, savedWorkouts }) => {
    return(
        <header className='header'>
            <div><h1 className='header--h1'><Link to='dashboard'>Gainz</Link></h1></div>
            <div>
                <ul>
                    <li>
                        <NavLink exact={true} to='help'>Help</NavLink>
                    </li>
                    <li>
                        <Link to='/profile'>My Workouts</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    savedWorkouts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    savedWorkouts: state.workouts.savedWorkouts
});

export default connect(mapStateToProps)(Header);
