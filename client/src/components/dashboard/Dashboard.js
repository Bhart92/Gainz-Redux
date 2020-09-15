import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from '../forms/Form';
import Header from '../layout/Header';
import RandomDisplay from './RandomDisplay';

const Dashboard = ({isAuthenticated}) => {
    if(!isAuthenticated){
        return <Redirect to='/' />;
    }
    return(
        <div className='container'>
         <Header />
         <section className='dashboard--container'>
            <Form />
            <RandomDisplay />
         </section>
        </div>
        )
    };

const mapStateToProp = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProp)(Dashboard);