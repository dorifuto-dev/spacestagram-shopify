import './LoaderSpinner.css';
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

const LoaderSpinner = (props) => {
  
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <h1>LOADERSPINNERTEST</h1>
}

export default LoaderSpinner;