import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to='/dashboard' />;
    }
    return (
        <Fragment>
            <div className='landing--container'>
                <div className='container'>
                    <h1><img src='../images/bench.svg' alt='bench press'/>Gainz</h1>
                    <span>Workout Randomizer</span>
                    <div className='landing--button--container'>
                    <Link className='button__landing button__reset' to='/register'>Create an Account</Link>
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