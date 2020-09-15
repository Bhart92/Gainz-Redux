import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from '../forms/Form';
import RandomDisplay from './RandomDisplay';

const Dashboard = ({isAuthenticated}) => {
    if(!isAuthenticated){
        return <Redirect to='/' />;
    }
    return(
        <Fragment>
        <section className='dashboard--container'>
            <Form />
            <RandomDisplay />
        </section>
        </Fragment>

        )
    };

const mapStateToProp = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProp)(Dashboard);