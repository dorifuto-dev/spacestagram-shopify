import './App.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import { cleanNasaData } from '../../dataCleaning';
import { trackPromise } from 'react-promise-tracker';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import ImageContainer from '../ImageContainer/ImageContainer';

const App = () => {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    fetchNasaData();
  }, [])

  const fetchNasaData = () => {
    trackPromise(
    fetchData("https://api.nasa.gov/planetary/apod?start_date=2021-12-01&end_date=2021-12-27&api_key=gNVAgni9T0aFJiqkENzREtHUzQXk79AchIYNH2lZ")
      .then(data => cleanNasaData(data))
      .then(data => setNasaData(data)))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="spacestagram-logo">Spacestagram</h1>
        <p className="spacestagram-subheading">Brought to you by NASA's Astronomy Picture of the Day API.</p>
        <LoaderSpinner />
        <ImageContainer imageData={nasaData} />
      </header>
    </div>
  );
}

export default App;
