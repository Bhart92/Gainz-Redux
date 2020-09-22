import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to='/dashboard' />;
    }
    return (
        <Fragment>
            <div className='landing--container'>
                <div className='container'>
                    <h1><img src='../images/exercise.svg' alt='bench press'/>Gainz</h1>
                    <span>Workout Randomizer</span>
                    <div className='landing--button--container'>
                        <Link className='button__landing button__reset' to='/register'>SignUp</Link>
                        <Link className='button__landing button__reset' to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);