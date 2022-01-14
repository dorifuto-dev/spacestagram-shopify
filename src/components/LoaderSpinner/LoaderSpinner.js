import './LoaderSpinner.css';
import React from 'react';
import { Audio } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

const LoaderSpinner = (props) => {
  
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <section className="loader-container"
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Audio color="#1687A7" />
        <p className="loading-text">Loading...</p>
      </section>
}

export default LoaderSpinner;