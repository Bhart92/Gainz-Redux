import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from '../forms/Form';
import RandomDisplay from './RandomDisplay';

const Dashboard = (props) => {
    return(
        <Fragment>
        <section className='dashboard--container'>
            <Form />
            <RandomDisplay />
        </section>
        </Fragment>

        )
    };

export default Dashboard;