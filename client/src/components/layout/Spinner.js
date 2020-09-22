import React from 'react';
import spinner from './spinner.gif';

export default () => (
  <div className='spinner-container'>
    <img
      className='spinner'
      src={spinner}
      style={{ margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </div>
);

