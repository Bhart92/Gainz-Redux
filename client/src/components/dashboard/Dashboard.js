import React from 'react';
import Form from '../forms/Form';
import RandomDisplay from './RandomDisplay';

const Dashboard = (props) => {
    return(
        <section className='container'>
            <div className='dashboard--container'>
                <Form />
                <RandomDisplay />
            </div>
        </section>
        );
    };

export default Dashboard;