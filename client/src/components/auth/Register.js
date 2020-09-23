import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: ''
    });

    const {
        username,
        password,
        password2
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('passwords dont match');
        } else{
            register({ username, password });
        }
    };
    
    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <div className='container register'>
            <div className='auth--container'>
                <div className='register--container'>
                    <h1>Sign Up</h1>
                    <p><i className="fas fa-user"></i> Create Your Account</p>
                    <div className='register--form-container'>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className='register--input-box'>
                                <input
                                    required
                                    type="username"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <div className='register--input-box'>
                                <input
                                    required
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    minLength="6"
                                    onChange={e => onChange(e)}
                                />
                                <input
                                    required
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    minLength="6"
                                    onChange={e => onChange(e)}      
                                />
                            </div>
                            <div className='login--input-box__small'>
                                <input className='button__landing button__reset register' type='submit' value='Register' />
                            </div>
                        </form>
                    </div>
                    <div className='my-1'>
                                <Link to='/'>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);