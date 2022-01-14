import './LoaderSpinner.css';
import React from 'react';
import { Audio } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

const LoaderSpinner = (props) => {
  
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
    <section className="loader-container">
      <Audio color="#1687A7" />
      <p className="loading-text">Loading...</p>
    </section>
};

export default LoaderSpinner;