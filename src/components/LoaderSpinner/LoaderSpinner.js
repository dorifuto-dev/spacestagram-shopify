import './LoaderSpinner.css';
import React from 'react';
import { Audio } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

const LoaderSpinner = (props) => {
  
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <section
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Audio />
      </section>
}

export default LoaderSpinner;