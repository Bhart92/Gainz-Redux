import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({... formData,[e.target.name]:e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };
    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/dashboard' />;
    }
    return (
        <Fragment>
            <div className='auth--container'>
                <div className='post--container register--container'>
                    <h1>Login</h1>
                    <div>
                        <form className='login--input-container' onSubmit={e => onSubmit(e)}>
                        <div className='register--input-box'>
                                <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                className='login--input-box'
                                value={email}
                                onChange={e => onChange(e)}
                                required/>
                                 <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    minLength="6"
                                    className='login--input-box'
                                    onChange={e => onChange(e)}
                                    required
                                />
                                </div>
                            <div className='register--input-box__small'>
                                <input type="submit" className='button__landing button__reset' value="Sign In" />
                            </div>
                        </form>
                    </div>
                    <p className="my-1">
                        <Link to="/register">Sign Up</Link>
                        <Link to='/'>Go Back</Link>
                    </p>
                </div>
            </div>
        </Fragment>

    );
};
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);